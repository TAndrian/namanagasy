import React from "react";
import { useRouter } from "next/router";
import Heading from "components/Heading";
import Page from "components/Page";
import PageLoading from "components/PageLoading";
import { PageProvider } from "hooks/usePage";
import Planning from "components/Planning";
import Itinerary from "components/Itinerary";

/*
	Circuit details
*/

const CircuitDetails = () => {
	const router = useRouter();
	const { id } = router.query;

	return (
		<PageProvider defaultLoading={ false }>
			<Heading
				title="Baobabs Alley"
				image="/images/covers/baobabs-alley-morondava.jpg"
			>
				Trip to Baobabs Alley for all budgets
			</Heading>
			<Page active={ 1 }>
				<div className="circuit-details n-s">
					<div className="circuit-details__main container w-100">
						<Planning />
						<Itinerary />
					</div>
				</div>
			</Page>
		</PageProvider>
	);
}

export default CircuitDetails;
