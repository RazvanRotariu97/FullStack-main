import React from "react";
import Rating from "./Rating";

const BookList = ({books, onDelete, onSort}) => {
    return (
        <div className="container text-center">
            <h2>Book list:</h2>
            <button className="btn btn-warning mb-3" onClick={onSort}>Sort</button>
            <ul className="list-group list-group-flush">
                {books.map(book => (
                    <li key={book.id} className="list-group-item">
                        {book.title} by {book.author} - <Rating rating={book.rating}/>
                        <button className="btn btn-danger btn-sm float-right" onClick={() => onDelete(book.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default BookList;