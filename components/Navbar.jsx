import React from "react";
import AppLinks from "components/AppLinks";

/*
	Navigation bar
*/

const Navbar = () => (
	<nav className="navbar w-100">
		<div className="container f-r-be-ce h-100">
			<div className="f-r-st-ce">
				<img
					className="navbar__logo w-60px mg-r-20"
					src="images/namanagasy-logo.png"
					alt="Namanagasy logo"
				/>
				<h1 className="navbar__title fs-220 t">Namana Gasy</h1>
			</div>
			<AppLinks />
		</div>
	</nav>
);

export default Navbar;