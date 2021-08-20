import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import SearchBar from '../Components/SearchBar/SearchBar'
import BookLists from '../Components/BookLists/BookLists'
import PageNum from '../Components/PageNum/PageNum'

const Homepage = () => {

    const inputRef = useRef()
    const [searchValue, setSearchValue] = useState('')
    const [books, setBooks] = useState([])
    const [page, setPage] = useState(1)
    const [error,setError] = useState('')

    useEffect(() => {
        axios.get(`https://api.itbook.store/1.0/search/${searchValue}/${page}`)
            .then(res => setBooks(res.data))
            .catch(err => setError(err))
    }, [searchValue, page])

    const handleSubmit = event => {
        event.preventDefault();
        setSearchValue(inputRef.current.value)
    }

    const handleSetPage = props => {
        setPage(props)
    }
    return (
        <>
            <SearchBar ref={inputRef} submit={handleSubmit} />
            {
                !error ? 
                <div>
                <BookLists books={books.books} />
                <PageNum books={books.books} total={Math.ceil(books.total / 10)} currentPage={page} setPage={handleSetPage} />
                </div>
                : <h1>Error while fetching Data</h1>
                }
            
        </>
    )
}

export default Homepage
