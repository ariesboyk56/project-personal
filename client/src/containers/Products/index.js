import React, {useState, useContext, useEffect} from 'react'
import Footer from './../../components/Footer'
import ContentList from './ContentList'
import ContentGrid from './ContentGrid'
import NavBarFilter from './NavBarFilter'
import classes from './Products.module.scss'
import SideBarFilter from './SideBarFilter'
import { ProductContext } from '../../contexts/ProductContext'
import Paginate from './../../components/common/Paginate'
import Loading from './../../components/common/Loading'
// import { useLocation } from "react-router-dom"
// import { useParams } from 'react-router';

const Products = () => {
    const [content, setContent] = useState("list")
    const [keySearch, setKeySearch] = useState("")
    const {proState: {proLoading, products, totalPages}, loadProduct} = useContext(ProductContext)
    // const location = useLocation();
    // console.log("location.pathname", location.pathname);
    // console.log("location", location);
    // const { id } = useParams();
    // console.log("id", id);
    function cbContent(data){
        setContent(data)
    }
    function cbSearch(data){
        setKeySearch(data)
    }
    
    const showContent = () => {
        if(proLoading || products === null){
            return <Loading />
        } else {
            return <div>
                {content === "list" ? <ContentList /> : <ContentGrid />}
            </div>
        }
    }
    useEffect(() => {
        const params = {
            page: null,
        }
        loadProduct(params)
      }, []);

    const handlePageChange = async event => {

        const params = {
            page: event.selected,
            search: keySearch
        }
        try {
            await loadProduct(params)
        } catch (error) {
            console.log(error);
        }
        
    }
    return (
        <div className={classes.shop}>
            <div className="wide">
                <NavBarFilter cbContent={cbContent} cbSearch={cbSearch}/>
                <div className="row">
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                        <SideBarFilter />
                    </div>
                    <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9">
                        {showContent()}
                        <Paginate 
                            pageCount = {totalPages}
                            handlePageChange={handlePageChange}
                        />
                    </div>
                </div>
            </div>
            <img className={classes.img} srcSet="//live.staticflickr.com/65535/51796045806_4e8380c8c6_h.jpg 2x" alt='brand' />
            <Footer />
        </div>
    )
}

export default Products
