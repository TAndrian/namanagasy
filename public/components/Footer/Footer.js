import React from "react";
import "./Footer";

function Footer() {
	const now = new Date().getFullYear();
	return (
		<div className="nm-footer">
			<p className="nm-text left">
				Made with love by <a className="link" href="#0" title="Web developer">Manjaka13.</a>
			</p>
			<p className="nm-text right">
				Copyright © 2017 - {now}
			</p>
		</div>
	)
}

export default Footer;