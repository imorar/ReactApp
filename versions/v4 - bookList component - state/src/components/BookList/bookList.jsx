import * as React from 'react';
import './style.css';
import { Book } from '../Book/book';

export class BookList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { books: [
            {title: "Trilogia Stapanul Inelelor", author: "J.R.R. Tolkien", rented: false},
            {title: "Codul lui DaVinci", author: "Dan Brown", rented: true},
            {title: "Hoțul de cărți", author: "Markus Zusak", rented: false},
            {title: "Cronicile din Narnia – Leul", author: "C.S.Lewis", rented: true},
            {title: "Harry Potter și piatra filozofală", author: "J.K. Rowling", rented: true},
            {title: "Hobbitul", author: "J.R.R. Tolkien", rented: false},
            {title: "Don Quixote", author: "Miguel de Cervantes", rented: false},
            {title: "Moby Dick", author: "Herman Melville", rented: true}
        ]};
    }

    renderBooks = () => {
        return this.state.books.map(book => (<Book title={book.title} author={book.author} rented={book.rented} />))
    }
    
    render() {
        return (
        <div className="book-list-container">
            {this.renderBooks()}
        </div>
        )
    }
}