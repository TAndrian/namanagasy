import React, {Component} from "react";
import {FontAwesomeIcon as Icon} from "@fortawesome/react-fontawesome";
import {faPlane} from "@fortawesome/free-solid-svg-icons";
import social from "../../data/social";
import text_list from "./Coverdata";

class Cover extends Component {
	constructor(props) {
		super();
		this.end_delay = 2000;
		this.delay = 30;
		this.state = {
			current_text: 0,
			text: " "
		};
		this.set_current_text = this.set_current_text.bind(this);
		this.set_text = this.set_text.bind(this);
		this.update_text = this.update_text.bind(this);
	}

	set_text(text) {
		this.setState(prev_state => {
			return {
				text: text
			};
		});
	}

	set_current_text(n) {
		this.setState(prev_state => {
			return {
				current_text: n
			};
		});
	}

	update_text() {
		let next_update = this.delay;
		const next = this.state.text.length + 1;
		if(next <= text_list[this.state.current_text].length) {
			this.set_text(text_list[this.state.current_text].substring(0, next));
			if(this.state.text.length === text_list[this.state.current_text].length)
				next_update = this.end_delay;
		}
		else {
			const next_current_text = this.state.current_text + 1 < text_list.length ? this.state.current_text + 1 : 0;
			this.set_text(" ");
			this.set_current_text(next_current_text);
		}
		setTimeout(this.update_text, next_update);
	}

	componentDidMount() {
		setTimeout(this.update_text, 1000);
	}

	map_social() {
		return social.map((s, n) => {
			return (
				<li className="item" key={n}>
					<a className="link" href={s.link} title={s.title}>
						<Icon className="icon" icon={s.icon} />
					</a>
				</li>
			);	
		})
	}

	render() {
		const mapped_social = this.map_social();
		return (
			<div className="nm-cover">
				<div className="content">
					<div className="box">
						<div className="container">
							<h1 className="nm-title nm-title-xlg title1">Travel to Madagascar</h1>
							<h2 className="nm-title nm-title-sm title2"><pre>{this.state.text}</pre>{}</h2>
						</div>
					</div>
					<div className="bottom">
						<button className="nm-text book" title="Let's prepare your next vacation.">
							<Icon className="icon" icon={faPlane} /> Book your trip !
						</button>
						<p className="nm-text copyright">Jonathan Rakotondrazaka © 2021</p>
						<div className="separator"></div>
						<ul className="social">
							{mapped_social}
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default Cover;