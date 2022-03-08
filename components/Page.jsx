import React from "react";
import Navbar from "components/Navbar";

/*
	Pages template
*/

const Page = ({ children }) => (
	<main>
		<Navbar />
		{ children }
	</main>
);

export default Page;