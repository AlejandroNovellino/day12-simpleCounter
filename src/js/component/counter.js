import { extend } from "jquery";
import React from "react";

export class Counter extends React.Component {
	constructor() {
		super();
		this.state = {
			seconds: 0
		};
	}

	componentDidMount() {
		setInterval(() => {
			this.setState({
				seconds: this.state.seconds + 1
			});
		}, 1000);
	}

	render() {
		let auxStr = this.state.seconds.toString();
		while (auxStr.length < 6) {
			auxStr = "0" + auxStr;
		}
		return (
			<div className="container">
				<div className="row justify-content-around text-white px-5 m-auto">
					<div className="col-2 text-center bg-dark border border-3 border-white rounded ms-3">
						<h1 className="display-1">
							<i className="far fa-clock fs-1"></i>
						</h1>
					</div>
					<div className="col-1 text-center bg-dark border border-3 border-white rounded">
						<h1 className="display-1">{auxStr[0]}</h1>
					</div>
					<div className="col-1 text-center bg-dark border border-3 border-white rounded">
						<h1 className="display-1">{auxStr[1]}</h1>
					</div>
					<div className="col-1 text-center bg-dark border border-3 border-white rounded">
						<h1 className="display-1">{auxStr[2]}</h1>
					</div>
					<div className="col-1 text-center bg-dark border border-3 border-white rounded">
						<h1 className="display-1">{auxStr[3]}</h1>
					</div>
					<div className="col-1 text-center bg-dark border border-3 border-white rounded">
						<h1 className="display-1">{auxStr[4]}</h1>
					</div>
					<div className="col-1 text-center bg-dark border border-3 border-white rounded">
						<h1 className="display-1">{auxStr[5]}</h1>
					</div>
				</div>
			</div>
		);
	}
}
