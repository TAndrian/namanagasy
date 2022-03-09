import React from "react";
import CircuitsPageWrapper from "components/CircuitsPageWrapper";
import { PageProvider } from "hooks/usePage";

/*
	Circuits page
*/

const CircuitsPage = () => (
	<PageProvider defaultLoading={ true }>
		<CircuitsPageWrapper />
	</PageProvider>
);

export default CircuitsPage;
