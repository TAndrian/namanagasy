import React from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import Social from "components/Social";

/*
	Home cover
*/

const CoverHome = () => (
	<div className="cover-home w-100 o-h">
		<div className="cover-home__bg w-100 h-100">
			<div className="cover-home__overlay w-100 h-100">
				<div className="container h-100 f-c-st-st">
					<div className="cover-home__top w-100 h-80 f-c-ce-ce o-h">
						<h2 className="cover-home__title fs-400 white tx-c">Travel to Madagascar</h2>
						<h3 className="cover-home__title2 t tx-c h-50px f-r-ce-ce mg-b-20 fs-180">
							Prepare your next vacation
						</h3>
						<button
							className="cover-home__check pd-10 pd-l-20 pd-r-20 br-5 p t tr-200"
							title="Check list of available circuits for this season."
						>
							<Icon icon={ ["fas", "pencil-alt"] } /> Available circuits
						</button>
					</div>
					<div className="cover-home__bottom w-100 o-h f-c-ce-en">
						<div className="cover-home__separator w-60 bg-t"></div>
						<Social />
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default CoverHome;