/*
	Testimonials page
*/

import React from "react";
import Link from "next/link";
import Heading from "../public/components/Heading/Heading";
import Page from "../public/components/Page/Page";
import Cover from "../public/components/Cover/Cover";
import {FontAwesomeIcon as Icon} from "@fortawesome/react-fontawesome";
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons";

function Testimonials() {
	return (
		<div className="nm-page nm-testimonials">
			<Heading
				title="Happy clients and impressed friends !"
				image="../public/img/baoababs_morondava_namanagasy.jpg"
			>
				Leave us a message telling about your travel experience or your first impressions about our services.
			</Heading>
			<Page page={3}>
				<div className="nm-container intro">
					<h2 className="nm-title nm-title-xlg title1">Leave us a message</h2>
					<div className="separator"></div>
					<h3 className="nm-title nm-title-sm title2">Testimonials</h3>
					<p className="nm-text nm-text-colored">
						What do you think about our service ? Leave some message telling us how did you find the trip to Madagascar. Now spread the words, take a trip to Madagascar through an experienced travel agency. We hope see you again soon and share these unique moments with your family and friends.
					</p>
					<form>
						<input className="nm-text name" type="text" placeholder="Your name" />
						<textarea className="nm-text message" placeholder="Your message"></textarea>
						<button className="nm-text submit" type="submit">
							<Icon className="icon" icon={faPaperPlane} /> Send
						</button>
					</form>
				</div>
				<div className="nm-container list">
					<div className="item">
						<div className="avatar">
							<div className="flex">
								<div className="image"></div>
							</div>
						</div>
						<div className="content">
							<h3 className="nm-title nm-title-md title">Manjaka13</h3>
							<p className="nm-text nm-text-colored text">Lorem ipsum minim labore in ea occaecat dolore anim culpa veniam eu sint do occaecat eiusmod exercitation nulla nostrud laboris aliqua.</p>
						</div>
					</div>
				</div>
			</Page>
		</div>
	);
}

export default Testimonials;