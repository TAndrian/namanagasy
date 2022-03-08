import React from "react";
import Link from "next/link";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { v4 as uuidv4 } from "uuid";

/*
	Links to all pages of the website
*/

const linkList = [
	{
		content: "Home",
		icon: ["fas", "home"],
		title: "Go to homepage.",
		link: "#0"
	},
	{
		content: "Circuits",
		icon: ["fas", "plane"],
		title: "Available circuits for this season.",
		link: "#0"
	},
	{
		content: "Madagascar",
		icon: ["fas", "globe"],
		title: "Everything you need to know about Madagascar.",
		link: "#0"
	},
	{
		content: "Contacts",
		icon: ["fas", "envelope"],
		title: "Contact us !",
		link: "#0"
	}
];

const mappedLinks = linkList.map((link, key) => (
	<li className={ `app-links__item ${key === 0 && "app-links__item--active"}` } key={ uuidv4() }>
		<Link href={ link.link } passHref>
			<a className="app-links__link" title={ link.title }>
				<Icon className="app-links__icon mg-r-5" icon={ link.icon } />
				{ link.content }
			</a>
		</Link>
	</li>
));

const AppLinks = () => (
	<ul className="app-links">
		{ mappedLinks }
	</ul>
);

export default AppLinks;