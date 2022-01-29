// import "../styles/styles.css";

import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
	return (
		<div className="app">
			<main className="main">
				<Header />
				{children}
			</main>
			<Footer />
		</div>
	);
};

export default Layout;
