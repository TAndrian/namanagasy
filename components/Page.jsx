import React from "react";
import Navbar from "components/Navbar";

/*
	Pages template
*/

const Page = ({ active, children }) => (
	<main>
		<Navbar active={ active }/>
		{ children }
	</main>
);

export default Page;