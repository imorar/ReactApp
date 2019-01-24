import React, { Component } from "react";
import logo from "./logo.png";
import "./App.css";
import { BookList } from "../src/components/BookList/bookList";
import { Cart } from "./components/Cart/cart";

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Rent a book</h1>
				</header>
				<div className="app-container">
					<Cart />
					<BookList />
				</div>
			</div>
		);
	}
}

export default App;
