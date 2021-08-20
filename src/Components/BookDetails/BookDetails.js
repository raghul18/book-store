import React from 'react'
import { useHistory } from 'react-router-dom'
import './BookDetails.css'

const BookDetails = props => {

    const { title, authors, publisher, language, pages, year, rating, price, image, isbn10, isbn13 } = props.bookDetails
    const history = useHistory()
    const handleBackButton = () => {
        history.push('/')
    }

    return (

        <div className='details'>
            <button className='back' onClick={handleBackButton}>&larr;</button>
            <div className='details__book'>
                <img className='details__image' src={image} alt={title} />
            </div>
            <div className='details__tab'>
                <table className='details__table'>
                    <tbody>
                        <tr>
                            <td>Price</td>
                            <td className='price'>{price}</td>
                        </tr>
                        <tr>
                            <td>Rating</td>
                            <td>{rating}</td>
                        </tr>
                        <tr>
                            <td>Author</td>
                            <td>{authors}</td>
                        </tr>
                        <tr>
                            <td>Publisher</td>
                            <td>{publisher}</td>
                        </tr>
                        <tr>
                            <td>Published</td>
                            <td>{year}</td>
                        </tr>
                        <tr>
                            <td>Pages</td>
                            <td>{pages}</td>
                        </tr>
                        <tr>
                            <td>Language</td>
                            <td>{language}</td>
                        </tr>
                        <tr>
                            <td>Isbn10</td>
                            <td>{isbn10}</td>
                        </tr>
                        <tr>
                            <td>Isbn13</td>
                            <td>{isbn13}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default BookDetails
