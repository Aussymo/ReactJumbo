import React from "react";
import Bootstrap from "bootstrap";
export const Jumbotron = () => {
	return (
		<div className="Jumbotron">
			<h1 className="display-4">About ME</h1>
			<p className="lead">These are all the things I love to do.</p>
			<hr className="my-4" />
			<p className="lead">
				<a className="btn btn-primary btn-lg" href="#" role="button">
					Learn more
				</a>
			</p>
		</div>
	);
};
