import * as React from 'react';
import './style.css';

export class Book extends React.Component {
    render() {
        return (
        <div className="book-container">
            <h1>{this.props.title}</h1>
            <h3>Author: {this.props.author}</h3>
            <p className={this.props.rented ? "rented" : "available"}>
                {this.props.rented ? "Rented" : "Available"}
            </p>
        </div>
        )
    }
}