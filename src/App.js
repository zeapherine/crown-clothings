import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";

import Header from "./components/header/header.component";

function App() {
	return (
		<div>
			<Header />
			<Switch>
				{/* switch will only render
				one of the route which matches, having exact path*/}
				<Route exact path="/" component={HomePage} />

				<Route path="/shop" component={ShopPage} />
			</Switch>
		</div>
	);
}

export default App;
