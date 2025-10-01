import React from 'react'
import BookItem from './BookItem'

export default function BooksGrid({ books }) {
    return (
        <div className="container mt-4">
            <h2 className="mb-4">Buku yang direkomendasikan pegawai kami</h2>
            <div className="row">
                {books.map((book) => (
                    <BookItem key={book.id} book={book} />
                ))}
            </div>
        </div>
    )
}
