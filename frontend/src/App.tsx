import React from "react";
import "./App.css";
import LoginFinal from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailsTable from "./components/details/DetailsTable";
import Detail from "./components/details/Detail";
import SignIn from "./components/SignIn";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Routes>
					<Route path="/" element={<LoginFinal/>}/>
					<Route path="sign-in" element={<SignIn/>}/>
					<Route path="all-details" element={<DetailsTable/>}/>
					<Route path="all-details/:slug" element={<Detail/>}/>
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
