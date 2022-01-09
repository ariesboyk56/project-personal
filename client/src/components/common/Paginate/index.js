import React from 'react'
import ReactPaginate from 'react-paginate';
import "./pagination.scss"

const Paginate = (props) => {
    let pageCount = Math.ceil(props.pageCount)
    const onPageChange = event => {
        props.handlePageChange(event)
    }
    return <ReactPaginate
    nextLabel="next >"
    onPageChange={onPageChange}
    pageRangeDisplayed={3}
    marginPagesDisplayed={2}
    pageCount={pageCount}
    previousLabel="< prev"
    pageClassName="page-item"
    pageLinkClassName="page-link"
    previousClassName="page-item"
    previousLinkClassName="page-link"
    nextClassName="page-item"
    nextLinkClassName="page-link"
    breakLabel="..."
    breakClassName="page-item"
    breakLinkClassName="page-link"
    containerClassName="pagination"
    activeClassName="active"
    renderOnZeroPageCount={null}
    />

}

export default Paginate
