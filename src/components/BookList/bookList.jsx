import * as React from 'react';
import './style.css';
import { Col } from 'react-bootstrap';
import { Book } from '../Book/book';

export class BookList extends React.Component {
    render() {
        return (
        <div className="book-list-container">
            <Col sm={6} md={3}>
                <Book title="Amintiri din copilarie" author="Ion Creanga" rented={false}/>
            </Col>
            <Col sm={6} md={3}>
                <Book title="Harap Alb" author="Ion Creanga" rented={true}/>
            </Col>
            <Col sm={6} md={3}>
                <Book title="Fram ursul polar" author="Cezar Petrescu" rented={true}/>
            </Col>
            <Col sm={6} md={3}>
                <Book title="Fabule" author="George Toparceanu" rented={false}/>
            </Col>
        </div>
        )
    }
}