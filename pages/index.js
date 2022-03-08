/*
	Home page
*/

import React from "react";
import Link from "next/link";
import Heading from "../public/components/Heading/Heading";
import Page from "../public/components/Page/Page";
import Cover from "../public/components/Cover/Cover";
import {FontAwesomeIcon as Icon} from "@fortawesome/react-fontawesome";
import {faLeaf, faBinoculars, faHandshake, faPlusCircle} from "@fortawesome/free-solid-svg-icons";
import circuits from "../public/data/circuits";

function Home() {
	let mapped_circuits = [];
	for(let i = 0; i < 3; i ++) {
		const content = (
			<div className="content">
				<div className="box" style={{background: "url(" + circuits[i].thumbnail + ") center center no-repeat", backgroundSize: "cover"}}>
				</div>
				<div className="overlay">
					<Link href={"/circuits/" + circuits[i].id} passHref>
						<a title={circuits[i].description}>
							<h4 className="nm-title nm-title-xsm title">{circuits[i].name}</h4>
							<p className="nm-text price">Starting from <span className="nb">{circuits[i].price} $</span></p>
							<p className="nm-text duration">{circuits[i].duration} days</p>
						</a>
					</Link>
				</div>
			</div>
		);
		if(i === 0)
			mapped_circuits.push(
				<div className="item left little" key={i}>
					{content}
				</div>
			);
		else if(i === 1)
			mapped_circuits.push(
				<div className="item right big" key={i}>
					{content}
				</div>
			);
		else if(i === 2)
			mapped_circuits.push(
				<div className="item left big" key={i}>
					{content}
				</div>
			);
	}
	mapped_circuits.push(
		<div className="item right little" key={3}>
			<div className="content">
				<div className="box" style={{background: "url(../img/circuits/thumbnails/plage_madagascar_namanagasy.jpg) center center no-repeat", backgroundSize: "cover"}}>
				</div>
				<div className="overlay">
					<Link href="/circuits" passHref>
						<a title="View more circuits proposals.">
							<h4 className="nm-title nm-title-xsm title">
								<Icon className="icon" icon={faPlusCircle} /> View more
							</h4>
							<p className="nm-text price">Cheap prices guarantee !</p>
						</a>
					</Link>
				</div>
			</div>
		</div>
	);


	return (
		<div className="nm-page nm-home">
			<Heading
				title="Travel to Madagascar with an experienced tourism agency"
				image="../public/img/baoababs_morondava_namanagasy.jpg"
			>
				Hire a touristic driver guide to visit Madagascar.
			</Heading>
			<Page page={0}>
				<Cover />

				<div className="nm-container intro">
					<h2 className="nm-title nm-title-xlg title1">Driver guide to Madagascar</h2>
					<div className="separator"></div>
					<h3 className="nm-title nm-title-sm title2">Namanagasy travel agency</h3>
					<p className="nm-text nm-text-colored">
						We are a travel agency in Madagascar. We share the beautiful Great Island's landscapes with the whole world. Come check <Link href="/circuits"><a  className="link" title="Circuits to Madagascar with prices.">our circuits</a></Link>, hire a driver guide, and travel to Madagascar for your next vacation, don't wait anymore, check out our circuits, book your trip and prepare for adventure, unforgetable moments are awaiting you!
					</p>
					
					<div className="list">
						<div className="item">
							<Icon className="icon" icon={faLeaf} />
							<p className="nm-text nm-text-colored text">
								Madagascar is a very beautiful country with lots of endemic fauna and flora. The living species are of a very rare kind and highly esteemed.
							</p>
						</div>
						<div className="item">
							<Icon className="icon" icon={faBinoculars} />
							<p className="nm-text nm-text-colored text">
								The great island has wonderful landscapes. If you love beachs, trekking, natural reserves, camping and many more, you're in the right place !
							</p>
						</div>
						<div className="item">
							<Icon className="icon" icon={faHandshake} />
							<p className="nm-text nm-text-colored text">
								Above almost everything said, Malagasy people are very friendly and will welcome you with smile and generosity. So, come on !
							</p>
						</div>
					</div>
				</div>

				<div className="nm-container circuits">
					<h2 className="nm-title nm-title-xlg title1">Cheap trending destinations</h2>
					<div className="separator"></div>
					<h3 className="nm-title nm-title-sm title2">Popular circuits</h3>
					<p className="nm-text nm-text-colored">
						Our prices are affordable for all budgets if you wish to travel to Madagascar. Visit beautiful places of Madagascar by picking one of the offers that suits your vacation budget. Please note that these circuits are just proposals, you can submit to us your own trip plan and adjust it as you wish, we will calculate your bill for free. For more information, don't hesitate to <a className="link" href="#contacts" title="Contacts us right away !">contact us</a> !
					</p>

					<div className="quad">
						{mapped_circuits}
					</div>
				</div>
			</Page>
		</div>
	);
}

export default Home;