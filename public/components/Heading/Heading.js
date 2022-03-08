/*
	The heading of every page
*/

import React from "react";
import Head from "next/head";
import config from "../../data/config";

function Heading(props) {
	const description = props.children ? props.children : "Next.js page description";
	const title = props.title ? props.title : "Next.js page";
	const image = props.image || "";
	return (
		<Head>
			<meta charSet="utf-8" />
			<title>{title}</title>
			<link rel="shortcut icon"href={"../../img/" + config.logo} />
			<meta name="theme-color" content={config.theme_hex} />
			<meta name="robots" content="index, follow" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0" />
			<meta name="author" content="Manjaka13 <manjaka.rajaonson@gmail.com>" />
			<meta name="description" content={description} />
			<meta name="google-site-verification" content="verification_token" />
			<meta name="generator" content="ReactJS" />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:type" content="website" />
			<meta property="og:locale" content="en_EN" />
			<meta property="og:image" content={image} />
			<meta property="og:site_name" content={config.name} />
		</Head>
	);
}

export default Heading;