import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";

/*
	Routing for leaflet
*/

const createRoutingLayer = () => {
	const instance = L.Routing.control({
		waypoints: [
			L.latLng(33.52001088075479, 36.26829385757446),
			L.latLng(33.50546582848033, 36.29547681726967)
		],
		lineOptions: {
			styles: [{ color: "#6FA1EC", weight: 6 }]
		},
		show: false,
		addWaypoints: false,
		routeWhileDragging: true,
		draggableWaypoints: true,
		fitSelectedRoutes: true,
		showAlternatives: false
	});

	return instance;
};

const RoutingMachine = createControlComponent(createRoutingLayer);

export default RoutingMachine;
