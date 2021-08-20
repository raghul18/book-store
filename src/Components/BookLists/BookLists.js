import React from 'react'
import BookCard from '../BookCard/BookCard'
import './BookLists.css'

const BookLists = props => {

    const { books } = props
    return (
        <div className='list'>
            {books &&
                books.map(book => {
                    return (<BookCard data-testid='bookLists' key={book.isbn13} book={book} />)
                })
            }
        </div>
    )
}

export default BookLists