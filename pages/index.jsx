import React, { Fragment } from "react";
import Heading from "components/Heading";
import Page from "components/Page";
import CoverHome from "components/CoverHome";

/*
	Homepage
*/

const Homepage = () => (
	<Fragment>
		<Heading
			title="Travel to Madagascar with an experienced tourism agency"
			image="images/baobabs-morondava.jpg"
		>
			Hire a touristic driver guide to visit Madagascar.
		</Heading>
		<Page>
			<CoverHome />
			<h1>Hello world !</h1>
		</Page>
	</Fragment>
);

export default Homepage;
