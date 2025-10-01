import React, { useEffect, useState } from 'react'
import BooksGrid from '../components/BooksGrid'
import books from '../../../constants/books'

export default function Books() {
    return (
        <div>
            <BooksGrid books={books} />
        </div>
    )
}
