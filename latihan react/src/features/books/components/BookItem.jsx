import React from 'react'
import { NavLink } from 'react-router';

function BookItem({ book }) {
    const placeholder= 'https://placehold.co/214x320 ';

    return (
        <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <NavLink to={`/books/${book.id}`} className="card h-100 shadow-sm">
                <img
                    src={book.image || placeholder}
                    className="card-img-top ratio"
                    alt={book.title}
                />
                <div className="card-body">
                    <h5 className="card-title">{book.title}</h5>
                    <p className="card-text text-muted">{book.year}</p>
                    <p className="card-text text-muted">{book.author}</p>
                    <button className="btn btn-primary btn-sm">View Details</button>
                </div>
            </NavLink>
        </div>
    );
}


export default BookItem
