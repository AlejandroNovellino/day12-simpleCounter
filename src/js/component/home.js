import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Counter } from "./counter.js";

//create your first component
export function Home() {
	return (
		<div className="container-fluid vw-100 vh-100 bg-secondary p-5">
			<Counter />
		</div>
	);
}
