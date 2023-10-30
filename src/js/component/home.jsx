import React from "react";
import ReactDOM from "react-dom";
import { Navbar } from "./Navbar";

//create your first component
const Home = () => {
	return (
		// <div >
		// 	<p>copyright © your website 2019</p>
		// </div>
		<Navbar />

	);
};

// export default Home;

ReactDOM.render(< Home />, document.querySelector("#app"));