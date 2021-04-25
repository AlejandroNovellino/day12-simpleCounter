import React from "react";

import { Alert } from "./Alert";

export class Counter extends React.Component {
	constructor() {
		super();
		this.state = {
			seconds: 0,
			stopped: false,
			intervalFunc: setInterval(this.updateCounter, 1000),
			intervalCountDown: null,
			countDownSeconds: 0,
			onCountDown: false,
			alert: 0,
			alertSet: false
		};
	}

	updateCounter = _ => {
		if (this.state.seconds > 999999) {
			this.setState({
				seconds: 0
			});
		} else {
			this.setState({
				seconds: this.state.seconds + 1
			});
		}
	};

	handleChangeCountDown = e => {
		this.setState({
			countDownSeconds: e.target.value
		});
	};

	updateOnCountdown = _ => {
		if (this.state.seconds) {
			this.setState({
				seconds: this.state.seconds - 1
			});
		} else {
			clearInterval(this.state.intervalCountDown);
			this.setState({
				onCountDown: false
			});

			this.handleClickReset();
			this.handleClickResume();
		}
	};

	handleClickCountdown = e => {
		if (
			this.state.onCountDown ||
			!this.state.countDownSeconds ||
			this.state.countDownSeconds > 999999
		)
			return null;

		this.handleClickStop();
		this.setState({
			seconds: this.state.countDownSeconds,
			intervalCountDown: setInterval(this.updateOnCountdown, 1000),
			onCountDown: true
		});
	};

	handleChangeAlert = e => {
		this.setState({
			alert: e.target.value
		});
	};

	handleClickAlert = e => {
		if (this.state.alert <= this.state.seconds) return null;

		this.setState({
			alertSet: true
		});
	};

	activateAlert = _ => {
		if (!this.state.alertSet) return false;

		return this.state.seconds == this.state.alert;
	};

	handleClickStop = _ => {
		if (this.state.onCountDown) return null;

		clearInterval(this.state.intervalFunc);
		this.setState({
			stopped: true
		});
	};

	handleClickReset = _ => {
		if (this.state.onCountDown) return null;

		this.setState({
			seconds: 0
		});
	};

	handleClickResume = _ => {
		if (this.state.onCountDown) return null;

		if (this.state.stopped) {
			this.setState({
				stopped: false,
				intervalFunc: setInterval(this.updateCounter, 1000)
			});
		}
	};

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
				<div className="row mt-4">
					<div className="col-4">
						<button
							type="button"
							className="btn btn-light btn-block"
							onClick={this.handleClickStop}>
							Stop
						</button>
					</div>
					<div className="col-4">
						<button
							type="button"
							className="btn btn-light btn-block"
							onClick={this.handleClickReset}>
							Reset
						</button>
					</div>
					<div className="col-4">
						<button
							type="button"
							className="btn btn-light btn-block"
							onClick={this.handleClickResume}>
							Resume
						</button>
					</div>
				</div>
				<div className="row justify-content-center mt-4">
					<div className="col-6">
						<form className="form-inline justify-content-center">
							<label className="mb-2 mr-2">Countdown</label>
							<input
								type="number"
								className="form-control mb-2 mr-sm-2"
								placeholder="Seconds countdown"
								onChange={this.handleChangeCountDown}
								value={this.state.countDownSeconds}
							/>

							<button
								type="button"
								className="btn btn-primary mb-2"
								onClick={this.handleClickCountdown}>
								Enter
							</button>
						</form>
					</div>
					<div className="col-6">
						<form className="form-inline justify-content-center">
							<label className="mb-2 mr-2">Alert at</label>
							<input
								type="number"
								className="form-control mb-2 mr-sm-2"
								placeholder="Seconds countdown"
								onChange={this.handleChangeAlert}
								value={this.state.alert}
							/>

							<button
								type="button"
								className="btn btn-primary mb-2"
								onClick={this.handleClickAlert}>
								Enter
							</button>
						</form>
					</div>
				</div>
				<div className="row justify-content-center">
					{this.activateAlert() ? <Alert /> : <></>}
				</div>
			</div>
		);
	}
}
