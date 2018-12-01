import * as React from 'react';
import './style.css';
import { Col } from 'react-bootstrap';
import { Book } from '../Book/book';

export class BookList extends React.Component {
    render() {
        return (
        <div className="book-list-container">
            <Book title="Trilogia Stapanul Inelelor" author="J.R.R. Tolkien" rented={false}/>
            <Book title="Codul lui DaVinci" author="Dan Brown" rented={true}/>
            <Book title="Hoțul de cărți" author="Markus Zusak" rented={true}/>
            <Book title="Cronicile din Narnia – Leul" author="C.S.Lewis" rented={false}/>
            <Book title="Harry Potter și piatra filozofală" author="J.K. Rowling" rented={true}/>
            <Book title="Hobbitul" author="J.R.R. Tolkien" rented={false}/>
            <Book title="Don Quixote" author="Miguel de Cervantes" rented={false}/>
            <Book title="Moby Dick" author="Herman Melville" rented={true}/>
        </div>
        )
    }
}