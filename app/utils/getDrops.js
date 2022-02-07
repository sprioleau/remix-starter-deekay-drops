import cheerio from "cheerio";

const getDrops = async () => {
	const scrapeUrl = "https://deekaykwon.com/letswalk";

	try {
		const response = await fetch(scrapeUrl);
		const html = await response.text();
		const $ = cheerio.load(html);
		const images = [];

		$(".image-block-wrapper img").each((i, image) => {
			const src = $(image).attr("data-image");
			const alt = $(image).attr("alt");
			const [name, number] = alt.split(" #");

			if (alt) images.push({ src, alt, name, number });
		});

		return { images, error: null };
	} catch (error) {
		console.error(error);
		return { images: null, error };
	}
};

export default getDrops;
