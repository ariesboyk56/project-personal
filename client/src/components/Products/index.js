import React, {useState, useContext} from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Footer from '../Footer'
import ContentList from './ContentList'
import ContentGrid from './ContentGrid'
import NavBarFilter from './NavBarFilter'
import classes from './Products.module.scss'
import SideBarFilter from './SideBarFilter'
import { ProductContext } from '../../contexts/ProductContext'
import Paginate from '../Paginate'

const Products = () => {
    const [content, setContent] = useState("list")
    const {proState: {proLoading, products, totalPages}} = useContext(ProductContext)
    function cbContent(data){
        setContent(data)
    }
    const showContent = () => {
        if(proLoading || products === null){
            return <section>
                <Skeleton count={10} height={5} />
            </section>
        } else {
            return <div>
                {content === "list" ? <ContentList /> : <ContentGrid />}
            </div>
        }
    }
    return (
        <div className={classes.shop}>
            <div className="wide">
                <NavBarFilter cbContent={cbContent}/>
                <div className="row">
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                        <SideBarFilter />
                    </div>
                    <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9">
                        {showContent()}
                        <Paginate 
                            pageCount = {totalPages}
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
