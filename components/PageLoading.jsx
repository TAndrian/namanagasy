import React from "react";
import Navbar from "components/Navbar";
import Spinner from "components/Spinner";

/*
	Shown when page still loads
*/

const PageLoading = ({ active = 0 }) => (
	<main>
		<Navbar active={ active }/>
		<div className="page-loading w-100 f-c-ce-ce">
			<Spinner />
			<p className="tx-c pd-20 b">Loading . . .</p>
		</div>
	</main>
);

export default PageLoading;