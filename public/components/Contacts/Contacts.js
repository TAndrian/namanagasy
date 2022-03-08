import React from "react";
import {FontAwesomeIcon as Icon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import data from "./Contactsdata";

function Contacts() {
	const mapped_contacts = data.contacts.map((item, n) => {
		return (
			<li className="nm-text" key={n}>
				<Icon className="icon" icon={item.icon} /> {item.content}
			</li>
		);
	});
	const mapped_partners = data.partners.map((item, n) => {
		return (
			<li className="nm-text" key={n}>
				<a className="link" href={item.url} title="Visit the website.">{item.content}</a>
			</li>
		);
	});
	return (
		<div id="contacts" className="nm-contacts">
			<div className="nm-container">
				<h2 className="nm-title nm-title-xlg title">
					<Icon className="icon" icon={faEnvelope} /> Contact us !
				</h2>
				<div className="separator"></div>
				<div className="box">
					<div className="left">
						<div className="flex">
							<ul className="content">
								{mapped_contacts}
							</ul>
						</div>
					</div>
					<div className="right">
						<div className="flex">
							<ul className="content">
							<li className="nm-text label">Our business partners</li>
								{mapped_partners}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Contacts;