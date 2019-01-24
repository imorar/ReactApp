import React, { Component } from "react";
import logo from "./logo.png";
import "./App.css";
import { Book } from "./components/Book/book";
class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Rent a book</h1>
				</header>
				<div className="book-list-container">
					<Book
						title={"Amintiri din copilarie"}
						author={"Ion Creanga"}
						rented={true}
					/>

					<Book title={"Harap Alb"} author={"Ion Creanga"} rented={false} />

					<Book
						title={"Fram ursul polar"}
						author={"Cezar Petrescu"}
						rented={true}
					/>
				</div>
			</div>
		);
	}
}

export default App;
