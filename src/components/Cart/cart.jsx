import * as React from 'react';
import './style.css';

export class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = { rentedBooks: [
            {id: 1, title: "Trilogia Stapanul Inelelor", author: "J.R.R. Tolkien", rented: false},
            {id: 2, title: "Codul lui DaVinci", author: "Dan Brown", rented: true}
        ]};
    }

    renderContent = () => {
            return (
                <div>
                    <span>Total: {this.state.rentedBooks.length}</span>
                    {this.renderRentedBooks()}
                </div>
            )
    }

    renderRentedBooks = () => {
        return this.state.rentedBooks.map((rentedBook, index) => <div key={rentedBook.id}>{index + 1}. <b>{rentedBook.title}</b> - {rentedBook.author}</div>);
    }

    rent = () => {
        alert('Rent');
    }

    render() {
        return (
        <div className="cart-container">
            {this.renderContent()}
            <span className="btn" onClick={this.rent}>Rent</span>
        </div>
        )
    }
}