import React from "react";

import { Counter } from "./Counter.js";

//create your first component
export function Home() {
	return (
		<div className="container-fluid vw-100 vh-100 bg-secondary p-5">
			<Counter />
		</div>
	);
}
