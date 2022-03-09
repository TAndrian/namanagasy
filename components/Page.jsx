import React, { Fragment } from "react";
import Navbar from "components/Navbar";
import Copyright from "components/Copyright";
import PageLoading from "components/PageLoading";
import { usePage } from "hooks/usePage";

/*
	Pages template
*/

const Page = ({ active, children }) => {
	const { loading } = usePage();

	return loading ? <PageLoading active={ active } /> : (
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
};

export default Page;