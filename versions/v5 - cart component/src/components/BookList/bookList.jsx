import * as React from 'react';
import './style.css';
import { Book } from '../Book/book';

export class BookList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { books: [
            {id: 1, title: "Trilogia Stapanul Inelelor", author: "J.R.R. Tolkien", rented: false},
            {id: 2, title: "Codul lui DaVinci", author: "Dan Brown", rented: true},
            {id: 3, title: "Hoțul de cărți", author: "Markus Zusak", rented: false},
            {id: 4, title: "Cronicile din Narnia – Leul", author: "C.S.Lewis", rented: true},
            {id: 5, title: "Harry Potter și piatra filozofală", author: "J.K. Rowling", rented: true},
            {id: 6, title: "Hobbitul", author: "J.R.R. Tolkien", rented: false},
            {id: 7, title: "Don Quixote", author: "Miguel de Cervantes", rented: false},
            {id: 8, title: "Moby Dick", author: "Herman Melville", rented: true}
        ]};
    }

    renderBooks = () => {
        return this.state.books.map(book => (<Book key={book.id} title={book.title} author={book.author} rented={book.rented} />))
    }

    render() {
        return (
        <div className="book-list-container">
            {this.renderBooks()}
        </div>
        )
    }
}