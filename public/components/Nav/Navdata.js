/*
	List of website's sections
*/

import {faHome, faMapMarkerAlt, faCar, faPencilAlt, faEnvelope} from "@fortawesome/free-solid-svg-icons";

const sections = [
	{
		name: "Home",
		title: "Go back to home page.",
		icon: faHome,
		link: {target: "/", type: "page"}
	},
	{
		name: "Madagascar",
		title: "Learn more about Madagascar.",
		icon: faMapMarkerAlt,
		link: {target: "/madagascar", type: "page"}
	},
	{
		name: "Circuits",
		title: "Our circuits proposals with prices.",
		icon: faCar,
		link: {target: "/circuits", type: "page"}
	},
	{
		name: "Testimonials",
		title: "Drop your name if you have done some beautiful trip with us !",
		icon: faPencilAlt,
		link: {target: "/testimonials", type: "page"}
	},
	{
		name: "Contacts",
		title: "Conctact us right now !",
		icon: faEnvelope,
		link: {target: "#contacts", type: "anchor"}
	}
];

export default sections;