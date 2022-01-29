export const expandImageMeta = (images) => {
	return images.map((item) => {
		const [name, number] = item.alt.split(' #');

		return {
			...item,
			name,
			number
		};
	});
};
