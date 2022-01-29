const Card = ({ drop, imageWidth }) => {
	return (
		<li className="grid__grid-item">
			<article>
				<a href={`/drops/${drop.number}`}>
					<main>
						<div className="grid__grid-item__image-wrapper">
							<img
								className="grid__grid-item__image"
								src={`${drop.src}?format=${imageWidth}w`}
								alt={drop.alt}
								width={imageWidth}
								height={imageWidth}
							/>
						</div>
					</main>
					<footer className="grid__grid-item__footer">
						<h3 className="grid__grid-item__footer__name align-center">{drop.name}</h3>
						<p className="grid__grid-item__footer__number text-muted align-center">#{drop.number}</p>
					</footer>
				</a>
			</article>
		</li>
	);
};

export default Card;
