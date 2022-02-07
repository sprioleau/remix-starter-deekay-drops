import { Link, useLoaderData } from "remix";

import Card from "~/components/Card";
import Layout from "~/components/Layout";
import cardStyles from "~/styles/components/card.css";
import { expandImageMeta } from "~/utils/expandImageMeta";
import footerStyles from "~/styles/components/footer.css";
import getDrops from "~/utils/getDrops";
import headerStyles from "~/styles/components/header.css";
import indexStyles from "~/styles/styles.css";

export const loader = async () => {
	const { images, error } = await getDrops();
	if (error) return null;
	return expandImageMeta(images);
};

export const links = () => {
	return [
		{ rel: "stylesheet", href: indexStyles },
		{ rel: "stylesheet", href: headerStyles },
		{ rel: "stylesheet", href: cardStyles },
		{ rel: "stylesheet", href: footerStyles },
	];
};

export default function Index() {
	const drops = useLoaderData();
	const imageWidth = 150;

	return (
		<Layout>
			<section>
				{drops ? (
					<ul className="grid" style={{ gridTemplateColumns: `repeat(auto-fit, minmax(${imageWidth}px, 1fr)` }}>
						{drops.map((drop) => (
							<Card key={drop.alt} drop={drop} imageWidth={imageWidth} />
						))}
					</ul>
				) : (
					<p>
						Uh oh, something went wrong. <Link to="/">Try again.</Link>
					</p>
				)}
			</section>
		</Layout>
	);
}
