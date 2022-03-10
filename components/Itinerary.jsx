import React from "react";
import { v4 as uuidv4 } from "uuid";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { Slide } from "react-slideshow-image";
import RoutingMachine from "components/RoutingMachine";
// import "leaflet/dist/images/marker-shadow.png";

/*
	Itinerary map and details
*/

const zoom = 15;
const position = [33.5024, 36.2988];

const Itinerary = () => {
	const slideList = [
		"/images/circuits/baobabs-alley-morondava.jpg",
		"/images/circuits/sainte-marie-madagascar.jpg",
		"/images/circuits/tuléar-madagascar.jpg"
	];
	const mappedSlide = slideList.map((slide) => (
		<div className="each-slide" key={ uuidv4() }>
			<div className="w-100 h-100 p-n n-s">
				<div
					className="w-100 h-100 f-c-ce-ce"
					style={{
						background: `url(${slide}) center center no-repeat`,
						backgroundSize: "cover",
					}}
				>
				</div>
			</div>
		</div>
	));

	return (
		<div className="itinerary bg-white b-b h-100 o-a">
			<h2 className="fs-180 pd-20"><Icon icon={ ["fas", "map-marker-alt"] } /> Antananarivo</h2>
			<div className="itinerary__map mg-l-20 o-h br-5">
				<MapContainer center={ position } zoom={ zoom } scrollWheelZoom={ false }>
					<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
					<RoutingMachine />
					{/*<Marker position={ position }>
						<Popup>Antananarivo</Popup>
					</Marker>*/}
				</MapContainer>
			</div>
			<p className="tx-j pd-20">
				Proin porta iaculis purus, et congue nibh placerat eu. Mauris interdum lectus aliquet erat tincidunt suscipit ultricies eget purus. Nulla mattis orci eget iaculis pharetra. Vestibulum mattis magna non volutpat malesuada.
			</p>
			<div className="slide mg-l-20 mg-b-20 h-260px o-h b-b">
				<Slide>
					{ mappedSlide }
				</Slide>
			</div>
		</div>
	);
}

export default Itinerary;