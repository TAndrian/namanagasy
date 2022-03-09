import React from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { LazyLoadImage as Image } from "react-lazy-load-image-component";

/*
	Circuit card representing circuit data
*/

const CircuitCard = () => (
	<article className="circuit-card o-h bg-white b-b f-c-st-st tr-200">
		<div className="circuit-card__representation o-h w-100">
			<div className="w-100 h-100">
				<Image
					className="image w-100 h-100"
					alt="Baobabs alley"
					src="images/baobabs-morondava.jpg"
				/>
			</div>
			<div className="circuit-card__data w-100 h-100 f-c-st-be">
				<a
					className="share w-20px h-20px o-h white pd-10 mg-10 br-r f-r-ce-ce tr-200"
					href="#0"
					title="Share this circuit."
				>
					<Icon icon={ ["fas", "share"] } />
				</a>
				<p className="pd-10 pd-b-20 fs-90 white">
					Starting from <span className="price pd-5 pd-l-10 pd-r-10 mg-l-5 lime br-5">280 $ / pers</span>
				</p>
			</div>
		</div>
		<div className="circuit-card__about">
			<div className="f-r-be-ce">
				<h2 className="circuit-card__title fs-120 pd-10">Baobabs alley</h2>
				<p className="circuit-card__duration pd-5 mg-r-10 fs-90 black">7 days</p>
			</div>
			<div className="circuit-card__separator mg-l-10"></div>
			<p className="circuit-card__text fs-90 pd-10 tx-j">
				Ut vel lorem a velit venenatis convallis mollis eu nisi. Aliquam consectetur ex sit amet ullamcorper vehicula. Nam in pretium velit. Sed volutpat dignissim scelerisque. Aenean molestie odio libero, vel condimentum risus iaculis vitae.
			</p>
			<p className="tx-c mg-t-10">
				<button className="circuit-card__details pd-10 pd-l-20 pd-r-20 bg-green white br-5 p tr-200">
					<Icon icon={ ["fas", "info-circle"] } /> Details
				</button>
			</p>
		</div>
	</article>
);

export default CircuitCard;