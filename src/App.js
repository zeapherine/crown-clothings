import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/homepage/homepage.component";

const HatsPage = () => (
	<div>
		<h1>HATS PAGE</h1>
	</div>
);

function App() {
	return (
		<div>
			<Switch>
				{/* switch will only render
				one of the route which matches, having exact path*/}
				<Route exact path="/" component={HomePage} />

				<Route path="/hats" component={HatsPage} />
			</Switch>
		</div>
	);
}

export default App;
