import React from 'react'
import Pagination from 'react-js-pagination'
import './PageNum.css'

const PageNum = props => {
    const { currentPage, books, total } = props

    return (
        <div> {books && books.length !== 0 &&
            <Pagination data-testid='pagination'
                activePage={currentPage}
                itemsCountPerPage={10}
                totalItemsCount={total}
                pageRangeDisplayed={10}
                onChange={(pageNum) => props.setPage(pageNum)}
            />
        }

        </div>
    )
}

export default PageNum
