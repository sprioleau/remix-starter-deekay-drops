import Layout from "../../components/Layout";
import dropStyles from "~/styles/components/drop.css";
import { expandImageMeta } from "../../utils/expandImageMeta";
import footerStyles from "~/styles/components/footer.css";
import headerStyles from "~/styles/components/header.css";
import indexStyles from "~/styles/styles.css";
import { useLoaderData } from "remix";

export const loader = async ({ params }) => {
	const response = await fetch("https://deekay-drops.netlify.app/api/drops");
	const images = await response.json();
	const drops = expandImageMeta(images);
	const drop = drops.find(({ number }) => number === params.dropId);
	return { drop };
};

export const links = () => {
	return [
		{ rel: "shortcut icon", href: "/deekay-logo.png", type: "image/x-icon" },
		{ rel: "stylesheet", href: indexStyles },
		{ rel: "stylesheet", href: headerStyles },
		{ rel: "stylesheet", href: footerStyles },
		{ rel: "stylesheet", href: dropStyles },
	];
};

export default function Drop() {
	const { drop } = useLoaderData();
	const imageWidth = 150;

	if (!drop) return null;

	return (
		<Layout>
			<article className="drop">
				<main className="drop__main">
					<header>
						<h1 className="drop__title align-center">{drop.alt}</h1>
					</header>
					<img
						className="drop__image"
						src={`${drop.src}?format=${imageWidth}w`}
						alt={drop.alt}
						width={imageWidth}
						height={imageWidth}
					/>
					<a className="button" href="https://opensea.io/collection/letswalk" target="_blank" rel="noreferrer">
						Purchase on OpenSea
					</a>
					<footer>
						<p className="align-center text-muted">
							Animation by <a href="https://deekaykwon.com/">DeeKay Kwon</a> (not S. Prioleau)
						</p>
					</footer>
				</main>
			</article>
		</Layout>
	);
}
