import React from "react";
import CircuitCard from "components/CircuitCard";

/*
	List of circuits
*/

const CircuitList = () => (
	<div className="circuit-list w-100">
		<div className="container">
			<div className="list pd-t-20 pd-b-20">
				<CircuitCard />
				<CircuitCard />
				<CircuitCard />
				<CircuitCard />
				<CircuitCard />
				<CircuitCard />
				<CircuitCard />
			</div>
		</div>
	</div>
);

export default CircuitList;