import React from "react";
import PropTypes from "prop-types";
import { propTypes } from "react-bootstrap/esm/Image";
export const Cards = (props) => {
	return (
		<div className="card" style={{ width: "18rem" }}>
			<img src={props.image} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">{props.text}</p>
				<div className="button">
					<a href="#" className="btn btn-primary">
						Go somewhere
					</a>
				</div>
			</div>
		</div>
	);
};
Cards.propTypes = {
	image: propTypes.string,
	title: propTypes.string,
	text: propTypes.string,
};
