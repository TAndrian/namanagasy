import React from "react";
import { v4 as uuidv4 } from "uuid";
import CircuitCard from "components/CircuitCard";

/*
	List of circuits
*/

const circuitList = [
	{
		id: uuidv4(),
		title: "Baobabs Alley",
		image: "/images/circuits/baobabs-alley-morondava.jpg",
		price: 280,
		duration: 7,
		description: "Ut vel lorem a velit venenatis convallis mollis eu nisi. Aliquam consectetur ex sit amet ullamcorper vehicula. Nam in pretium velit. Sed volutpat dignissim scelerisque. Aenean molestie odio libero, vel condimentum risus iaculis vitae."
	},
	{
		id: uuidv4(),
		title: "Sainte-Marie",
		image: "/images/circuits/sainte-marie-madagascar.jpg",
		price: 335,
		duration: 5,
		description: "Ut vel lorem a velit venenatis convallis mollis eu nisi. Aliquam consectetur ex sit amet ullamcorper vehicula. Nam in pretium velit. Sed volutpat dignissim scelerisque. Aenean molestie odio libero, vel condimentum risus iaculis vitae."
	},
	{
		id: uuidv4(),
		title: "Côte Est",
		image: "/images/circuits/côte-est.jpg",
		price: 250,
		duration: 4,
		description: "Ut vel lorem a velit venenatis convallis mollis eu nisi. Aliquam consectetur ex sit amet ullamcorper vehicula. Nam in pretium velit. Sed volutpat dignissim scelerisque. Aenean molestie odio libero, vel condimentum risus iaculis vitae."
	},
	{
		id: uuidv4(),
		title: "Tuléar et Grand Sud",
		image: "/images/circuits/tuléar-madagascar.jpg",
		price: 234,
		duration: 4,
		description: "Ut vel lorem a velit venenatis convallis mollis eu nisi. Aliquam consectetur ex sit amet ullamcorper vehicula. Nam in pretium velit. Sed volutpat dignissim scelerisque. Aenean molestie odio libero, vel condimentum risus iaculis vitae."
	},
	{
		id: uuidv4(),
		title: "Traversée RN-7",
		image: "/images/circuits/rn7-madagascar.jpg",
		price: 205,
		duration: 3,
		description: "Ut vel lorem a velit venenatis convallis mollis eu nisi. Aliquam consectetur ex sit amet ullamcorper vehicula. Nam in pretium velit. Sed volutpat dignissim scelerisque. Aenean molestie odio libero, vel condimentum risus iaculis vitae."
	},
];

const mappedCircuits = circuitList.map(circuit => (
	<CircuitCard key={ uuidv4() } { ...circuit} />
))

const CircuitList = () => (
	<div className="circuit-list w-100">
		<div className="container">
			<div className="list pd-t-20 pd-b-20">
				{ mappedCircuits }
			</div>
		</div>
	</div>
);

export default CircuitList;