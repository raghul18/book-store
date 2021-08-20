import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import BookDetails from '../Components/BookDetails/BookDetails';

const DetailsPage = () => {
    const { id } = useParams();
    const [bookdetails, setBookDetails] = useState([]);

    useEffect(() => {
        axios.get(`https://api.itbook.store/1.0/books/${id}`)
            .then(res => setBookDetails(res.data))
            .catch(err => console.log(err))
    }, [id])
    return (
        <>
            <BookDetails bookDetails={bookdetails} />
        </>
    )
}

export default DetailsPage
