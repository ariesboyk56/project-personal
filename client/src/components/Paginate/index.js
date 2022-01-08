import React, { useEffect, useContext} from 'react'
import ReactPaginate from 'react-paginate';
import { ProductContext } from '../../contexts/ProductContext';
import "./pagination.scss"

const Paginate = (props) => {
    let pageCount = Math.ceil(props.pageCount)
    const {loadProduct} = useContext(ProductContext)

    useEffect(() => {
        const params = {
            page: null
        }
        loadProduct(params)
      }, []);

    const handlePageChange = async event => {
        const params = {
            page: event.selected
        }
        try {
            await loadProduct(params)
        } catch (error) {
            console.log(error);
        }
        
    }
    return <ReactPaginate
    nextLabel="next >"
    onPageChange={handlePageChange}
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
