import React from "react";

export class Alert extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className="alert alert-success p-4" role="alert">
				Alert reached !
			</div>
		);
	}
}
