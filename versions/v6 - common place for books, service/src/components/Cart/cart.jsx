import * as React from 'react';
import './style.css';

export class Cart extends React.Component {
    renderContent = () => {
            return (
                <div>
                    <span>Total: {this.props.rentedBooks.length}</span>
                    {this.renderRentedBooks()}
                </div>
            )
    }

    renderRentedBooks = () => {
        return this.props.rentedBooks.map((rentedBook, index) => <div key={rentedBook.id}>{index + 1}. <b>{rentedBook.title}</b> - {rentedBook.author}</div>);
    }

    rent = () => {
        this.props.handleOrder();
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