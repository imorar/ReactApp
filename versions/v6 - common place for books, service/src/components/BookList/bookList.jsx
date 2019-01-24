import * as React from 'react';
import './style.css';
import { Book } from '../Book/book';

export class BookList extends React.Component {
    renderBooks = () => {
        return this.props.books.map(book => (<Book addToCart={this.props.addToCart} key={book.id} {...book} />))
    }

    render() {
        return (
        <div className="book-list-container">
            {this.renderBooks()}
        </div>
        )
    }
}