import React from 'react'
import { useParams } from 'react-router';
import books from '../../../constants/books';

export default function BookDetail() {
    const { id } = useParams()
    const placeholder = 'https://placehold.co/214x320';
    const book = books.find((book) => book.id === id);

    return (
        <div className='container my-5'>
            <div className="row">
                <div className='col-md-6 d-flex justify-content-center'>
                    <img src={book.image || placeholder} alt="" style={{height: '400px'}}/>
                </div>
                <div className='col-md-6'>
                    <h2>{book.title}</h2>
                    <p className='text-muted'>{book.author} - {book.year}</p>
                    <p>{book.description}</p>
                </div>
            </div>
        </div>
    )
}
