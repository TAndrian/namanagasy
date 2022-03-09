import React from "react";
import { useRouter } from "next/router";
import Heading from "components/Heading";
import Page from "components/Page";
import PageLoading from "components/PageLoading";
import { PageProvider } from "hooks/usePage";

/*
	Circuit details
*/

const CircuitDetails = () => {
	const router = useRouter();
	const { id } = router.query;

	return (
		<PageProvider defaultLoading={ true }>
			<Heading
				title="Baobabs Alley"
				image="/images/covers/baobabs-alley-morondava.jpg"
			>
				Trip to Baobabs Alley for all budgets
			</Heading>
			<Page active={ 1 }>
				<p className="pd-50 mg-50">Circuit id: { id }</p>
			</Page>
		</PageProvider>
	);
}

export default CircuitDetails;
