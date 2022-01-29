const Header = () => {
	const imageWidth = 80;

	return (
		<nav className="nav">
			<a href="/" className="no-decor">
				<img src="/deekay-logo.png" alt="DeeKay Logo" className="nav__logo" width={imageWidth} height={imageWidth} />
			</a>
			<a href="/" className="no-decor">
				<h1 className="nav__title">DeeKay Drops</h1>
			</a>
			<p className="text-muted align-center">
				A small Remix starter app by <a href="https://www.sprioleau.dev/">S. Prioleau</a>. <br />
				Logo and all GIFs by <a href="https://deekaykwon.com/">DeeKay Kwon</a>.
			</p>
		</nav>
	);
};

export default Header;
