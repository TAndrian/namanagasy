import React from "react";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";

/*
	Detailed planing of the trip
*/

const planningList = [
	"Quisque pellentesque in sem at commodo. Nulla ut quam maximus, rutrum neque ut, interdum est. Praesent in euismod nunc.",
	"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In a quam sit amet velit volutpat tristique.",
	"Nulla ut turpis et tellus vehicula pellentesque vitae eget turpis. Vivamus auctor mi sit amet ex lobortis, eu euismod arcu consequat.",
	"Curabitur eget quam rhoncus, lacinia quam gravida, convallis nibh."
]

const mappedPlanning = planningList.map((planning, key) => (
	<li className="planning__item pd-10 pd-b-0 tr-200 br-5 p" key={ uuidv4() }>
		<p className="title b u p-n"><Icon icon={ ["fas", "calendar-alt"] } /> Day { key + 1 } :</p>
		<p className="details pd-10 pd-l-0 pd-r-0 tx-j p-n">
			{ planning }
		</p>
	</li>
));

const Planning = () => (
	<div className="planning bg-white b-b pd-b-10">
		<div className="pd-20 f-r-st-ce">
			<div className="planning__separator bg-t w-10 mg-r-20"></div>
			<h2 className="fs-180">
				<Icon icon={ ["fas", "car"] } /> Planing details
			</h2>
		</div>
		<ul className="planning__list mg-10 mg-t-0">
			{ mappedPlanning }
		</ul>
	</div>
);

export default Planning;