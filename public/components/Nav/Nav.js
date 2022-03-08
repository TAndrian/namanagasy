/*
	Website navigation
*/

import React from "react";
import Link from "next/link";
import config from "../../data/config";
import sections from "./Navdata";
import {FontAwesomeIcon as Icon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";

function Nav(props) {
	const page = props.page ? props.page : 0;
	const mapped_sections = sections.map((section, n) => {
		const active = page === n;
		const link_cn = active ? "link link-active" : "link";
		const underline_cn = active ? "underline underline-active" : "underline";
		let content = (
			<Link href={section.link.target} passHref>
				<a className={link_cn} title={section.title}>
					<div className="link-child nm-text">
						<Icon className="icon" icon={section.icon} /> {section.name}
					</div>
					<div className={underline_cn}></div>
				</a>
			</Link>
		);
		if(n === sections.length - 1)
			content = (
				<a className={link_cn} href={section.link.target} title={section.title}>
					<div className="link-child nm-text">
						<Icon className="icon" icon={section.icon} /> {section.name}
					</div>
					<div className={underline_cn}></div>
				</a>
			);

		return (
			<li className="item" key={n}>
				{content}
			</li>
		);
	});
	return (
		<>
		<div className="nm-nav">
			<div className="left">
				<img className="logo" src={"../../img/" + config.logo} alt="Logo Namanagasycar" />
				<p className="nm-title-md title">{config.name}</p>
			</div>
			<div className="right">
				<ul className="sections">
					{mapped_sections}
				</ul>
				<div className="trigger">
					<Icon className="icon" icon={faBars} />
				</div>
			</div>
		</div>
		<div className="nm-nav-black"></div>
		</>
	);
}

export default Nav;