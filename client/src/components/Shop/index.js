import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer'
import NavBarFilter from './NavBarFilter'
import classes from './Shop.module.scss'
import brandImg from "../../image/brand.png"
import SideBarFilter from './SideBarFilter'
const Shop = () => {

    return (
        <div className={classes.shop}>
            <div className="wide">
                <NavBarFilter />
                <div className="row">
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                        <SideBarFilter />
                    </div>
                    <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9">
                        <Outlet />
                    </div>
                </div>
            </div>
            <img srcSet={`${brandImg} 2x`} alt='brand' />
            <Footer />
        </div>
    )
}

export default Shop
