import React from "react";
import Head from "next/head";

/*
	Head tag of each page
*/

const Heading = ({
	title = "",
	image = "",
	children = ""
}) => (
	<Head>
		<meta charSet="utf-8" />
		<title>{ title }</title>
		<link rel="shortcut icon" href="/images/namanagasy-logo.png" />
		<meta name="theme-color" content="#282828" />
		<link rel="manifest" href="/manifest.json" />
		<meta name="robots" content="index, follow" />
		<meta
			name="viewport"
			content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0"
		/>
		<meta httpEquiv="language" content="en" />
		<meta name="author" content="Hari13 <manjaka.rajaonson@gmail.com>" />
		<meta name="description" content={ children || "" } />
		<meta name="generator" content="NextJS" />
		<meta httpEquiv="language" content="en" />
		<meta property="og:title" content={ title } />
		<meta property="og:description" content={ children || "" } />
		<meta property="og:type" content="website" />
		<meta property="og:locale" content="en_EN" />
		<meta property="og:image" content={ image } />
		<meta property="og:site_name" content="Namanagasy" />
	</Head>
);

export default Heading;
