import React, { Component } from "react";
import logo from "./logo.png";
import "./App.css";
import { BookList } from "../src/components/BookList/bookList";
import { Cart } from "./components/Cart/cart";
import { DataService } from "./services/services";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { books: [], cart: [] };
	}

	componentDidMount = () => {
		const service = new DataService();
		service.getData.then(result => this.setState({ books: result }));
	};

	handleAddToCart = id => {
		const toBeAdded = this.state.books.filter(x => x.id === id)[0];
		toBeAdded.rented = true;

		const newCart = this.state.cart;
		newCart.push(toBeAdded);

		this.setState({ cart: newCart });
	};

	submitOrder = () => {
		this.setState({ cart: [] }, () => {
			alert("Your order has been successfully processed!");
		});
	};

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Rent a book</h1>
				</header>
				<div className="app-container">
					<Cart rentedBooks={this.state.cart} handleOrder={this.submitOrder} />
					<BookList books={this.state.books} addToCart={this.handleAddToCart} />
				</div>
			</div>
		);
	}
}

export default App;
