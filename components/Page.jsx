import React, { Fragment } from "react";
import Navbar from "components/Navbar";
import Copyright from "components/Copyright";

/*
	Pages template
*/

const Page = ({ active, children }) => (
	<Fragment>
		<main>
			<Navbar active={ active }/>
			{ children }
		</main>
		<footer>
			<Copyright />
		</footer>
	</Fragment>
);

export default Page;