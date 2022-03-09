import React, { Fragment } from "react";
import Heading from "components/Heading";
import Page from "components/Page";
import CircuitList from "components/CircuitList";
import { PageProvider } from "hooks/usePage";

/*
	Circuits page
*/

const CircuitsPage = () => (
	<PageProvider>
		<Heading
			title="Trips to Madagascar for all budgets"
			image="/images/covers/pirogue-morondava.jpg"
		>
			Affordable touristic circuits to Madagascar with experienced driver and guide.
		</Heading>
		<Page active={ 1 }>
			<CircuitList />
		</Page>
	</PageProvider>
);

export default CircuitsPage;
