const Footer = () => {
	return (
		<footer className="footer text-muted">
			<ul className="footer__list">
				<li className="footer__list-item">
					<a href="https://github.com/sprioleau/remix-starter-deekay-drops" target="_blank" rel="noreferrer">
						source
					</a>
				</li>
				<li className="footer__list-item">
					created by{" "}
					<a href="https://github.com/sprioleau" target="_blank" rel="noreferrer">
						@sprioleau
					</a>
				</li>
			</ul>
			<p>
				See the{" "}
				<a href="https://deekay-drops-svelte.netlify.app/" target="_blank" rel="noreferrer">
					Svelte version
				</a>
			</p>
		</footer>
	);
};

export default Footer;
