import * as React from 'react';
import './style.css';

export class Book extends React.Component {
    renderRentButton = () => {
        if(!this.props.rented) {
            return <span onClick={() => this.props.addToCart(this.props.id)} className="btn">Rent this book</span>
        }
    }

    render() {
        return (
        <div className="book-container">
            <h1>{this.props.title}</h1>
            <h3>Author: {this.props.author}</h3>
            <p className={this.props.rented ? "rented" : "available"}>
                {this.props.rented ? "Rented" : "Available"}
            </p>
            {this.renderRentButton()}
        </div>
        )
    }
}