import React from 'react'
import { Link } from 'react-router-dom'
import './BookCard.css'

const BookCard = props => {
    const { book } = props
    return (
        <div className='card'>
            <Link to={`/details/${book.isbn13}`} >
                <img src={book.image} alt={book.title} className='card__image' />
            </Link>
            <h4 className='card__title'>{book.title}</h4>
            <p className='card__subtitle'>{book.subtitle}</p>
            <p className='card__price'>{book.price}</p>
        </div>
    )
}

export default BookCard