import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "remix";

export function meta() {
	return {
		title: "Deekay Drops",
		description: "A small Remix starter app by by San'Quan Prioleau",
		"og:type": "website",
		"og:url": "https://deekay-drops-remix.netlify.app/",
		"og:title": "Deekay Drops",
		"og:description": "A small Remix starter app by by San'Quan Prioleau",
		"og:image": "https://deekay-drops-remix.netlify.app/deekay-drops-social-card-remix.png",
		"twitter:card": "summary_large_image",
		"twitter:url": "https://deekay-drops-remix.netlify.app/",
		"twitter:title": "Deekay Drops",
		"twitter:description": "A small Remix starter app by by San'Quan Prioleau",
		"twitter:image": "https://deekay-drops-remix.netlify.app/deekay-drops-social-card-remix.png",
	};
}

export default function App() {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width,initial-scale=1" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
				<link
					href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;700&display=swap"
					rel="stylesheet"
				/>
				<link rel="shortcut icon" href="deekay-logo.png" type="image/x-icon" />
				<Meta />
				<Links />
			</head>
			<body>
				<Outlet />
				<ScrollRestoration />
				<Scripts />
				{process.env.NODE_ENV === "development" && <LiveReload />}
			</body>
		</html>
	);
}
