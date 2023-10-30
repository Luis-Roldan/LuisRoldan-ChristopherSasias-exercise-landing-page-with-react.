import React from "react";
import ReactDOM from "react-dom";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<div>card</div>
			<Footer />
		</div>
	);
};

// export default Home;

ReactDOM.render(< Home />, document.querySelector("#app"));