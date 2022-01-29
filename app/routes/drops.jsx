import Layout from "~/components/Layout";
import { Outlet } from "remix";
import footerStyles from "~/styles/components/footer.css";
import headerStyles from "~/styles/components/header.css";
import indexStyles from "~/styles/styles.css";

export const links = () => {
	return [
		{ rel: "stylesheet", href: indexStyles },
		{ rel: "stylesheet", href: headerStyles },
		{ rel: "stylesheet", href: footerStyles },
	];
};

export default () => {
	return (
		<Layout>
			<Outlet />
		</Layout>
	);
};
