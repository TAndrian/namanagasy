/*
	Circuits list
*/

import React, {Component} from "react";
import Link from "next/link";
import Heading from "../public/components/Heading/Heading";
import Page from "../public/components/Page/Page";
import Cover from "../public/components/Cover/Cover";
import {FontAwesomeIcon as Icon} from "@fortawesome/react-fontawesome";
import {faCaretDown} from "@fortawesome/free-solid-svg-icons";
import diapo from "../public/data/circuits_diapo";
import circuits from "../public/data/circuits";

class Circuits extends Component {
	constructor(props) {
		super();
		this.state = {
			current: 0
		};
		this.update_diapo = this.update_diapo.bind(this);
	}

	update_diapo() {
		this.setState(prev_state => {
			return {
				current: prev_state.current + 1 < diapo.length ? prev_state.current + 1 : 0
			};
		});
	}

	componentDidMount() {
		setInterval(() => {
			this.update_diapo();
		}, 3000);
	}

	render() {
		const mapped_diapo = diapo.map((d, n) => {
			const selected = this.state.current === n;
			const style = {
				top: (-100 * (selected ? n : n + 1)) + "%",
				opacity: selected ? "1" : "0"
			};
			return (
				<div className="item" style={style} key={n}>
					<h2 className="nm-title nm-title-xlg title">{d.title}</h2>
					<div className="separator"></div>
					<p className="nm-text text">{d.content}</p>
				</div>
			);
		});
		const mapped_circuits = circuits.map((c, n) => {
			const style = {
				background: "url(" + c.thumbnail + ") center center no-repeat",
				backgroundSize: "cover"
			};
			return (
				<div className="item" key={n} style={style}>
					<Link href={"/circuits/" + c.id} passHref>
						<a className="overlay" title={c.description}></a>
					</Link>
					<div className="content">
						<h3 className="nm-title nm-title-xsm title">{c.name}</h3>
						<p className="nm-text price">
							Starting from <span className="nb">{c.price} $</span>
						</p>
						<p className="nm-text duration">{c.duration} days</p>
						</div>
				</div>
			);
		});

		return (
			<div className="nm-page nm-circuits">
				<Heading
					title="Trips to Madagascar for all budgets"
					image="../public/img/pirogue_morondava_namanagasy.jpg"
				>
					Cheap touristic circuits to Madagascar with experienced driver and guide.
				</Heading>
				<Page page={2}>
					<div className="cover">
						<div className="overlay">
							<img className="chameleon" src="img/chameleon_namanagasy.png" alt="Chameleon Madagascar" />
							<div className="diapo">
								{mapped_diapo}
							</div>
							<Link href="#" passHref>
								<a className="nm-text getting-started" title="Let us introduce you the available circuits">
									Getting started <Icon className="icon" icon={faCaretDown} />
								</a>
							</Link>
						</div>
					</div>

					<div className="nm-container intro">
						<h2 className="nm-title nm-title-xlg title1">Circuits to Madagascar</h2>
						<div className="separator"></div>
						<h3 className="nm-title nm-title-sm title2">Book you trip</h3>
						<p className="nm-text nm-text-colored">
							Travel to Madagascar? Namanagasy is your solution, an experienced travel agency in Madagascar for all budgets. Just book now your trip to Madagascar. Here is a list of available circuits you can do here, please note that each of them are just proposals and could be adjusted as you wish, you can also propose me your own circuit and we will plan it together.
						</p>
						<div className="list">
							{mapped_circuits}
						</div>
					</div>
				</Page>
			</div>
		);
	}
}

export default Circuits;