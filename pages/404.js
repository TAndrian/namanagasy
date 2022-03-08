import React from "react";
import Link from "next/link";
import Heading from "../public/components/Heading/Heading";
import {FontAwesomeIcon as Icon} from "@fortawesome/react-fontawesome";
import {faQuestionCircle} from "@fortawesome/free-solid-svg-icons";

/*function Custom404() {
	return (
		<div className="nm-404">
			<div className="box">
				<h1 className="nm-title nm-title-xlg"><Icon className="icon" icon={faQuestionCircle} /> 404 Not found</h1>
				<div className="separator"></div>
				<p className="nm-text nm-text-colored">Oups, it seems that the page you want to reach does not exist or has been removed. Please consider go back to <Link href="/" passHref><a className="link" title="Back to home page.">home</a></Link> page. You could also report any issue you are having navigating the app in out contacts section.</p>
			</div>
		</div>
	)
}*/

function Custom404() {
	return (
		<div className="nm-page">
			<Heading
				title="Error: 404 not found !"
				image="../public/img/representation/baoababs_morondava_namanagasycar.jpg"
			>
				Oups, it seems that the page you want to reach does not exist or has been removed from the server.
			</Heading>
			<main>
				<div className="nm-404">
					<div className="box">
						<h1 className="nm-title nm-title-xlg"><Icon className="icon" icon={faQuestionCircle} /> 404 Not found</h1>
						<div className="separator"></div>
						<p className="nm-text nm-text-colored">Oups, it seems that the page you want to reach does not exist or has been removed. Please consider go back to <Link href="/" passHref><a className="link" title="Back to home page.">home</a></Link> page. You could also report any issue you are having navigating the app in out contacts section.</p>
					</div>
				</div>
			</main>
		</div>
	);
}

export default Custom404;