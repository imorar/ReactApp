import React, { Component } from "react";
import logo from "./logo.png";
import "./App.css";
class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Rent a book</h1>
				</header>
				<div className="book-list-container">
					<div className="book-container">
						<h1>Amintiri din copilarie</h1>
						<h3>Author: Ion Creanga</h3>
						<p className="rented">Rented</p>
					</div>
					<div className="book-container">
						<h1>Harap Alb</h1>
						<h3>Author: Ion Creanga</h3>
						<p className="available">Available</p>
					</div>
					<div className="book-container">
						<h1>Fram ursul polar</h1>
						<h3>Author: Cezar Petrescu</h3>
						<p className="rented">Rented</p>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
