import React from "react";
import { useRouter } from "next/router";
import Heading from "components/Heading";
import Page from "components/Page";
import PageLoading from "components/PageLoading";
import { PageProvider } from "hooks/usePage";
import Planning from "components/Planning";

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
				<p className="pd-50 mg-50">Circuit id: { id }</p>
				<div className="container f-r-be-st">
					<div className="w-50">
						<Planning />
					</div>
				</div>
			</Page>
		</PageProvider>
	);
}

export default CircuitDetails;
