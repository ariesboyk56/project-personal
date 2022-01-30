import React, { useState } from 'react'
import classes from './ProductDetail.module.scss'
import clsx from 'clsx'
import {useDispatch} from 'react-redux'
import { useLocation, useParams, useSearchParams } from "react-router-dom"
import BasicRating from '../Rating';
import { ReactComponent as FacebookIcon } from './../../../image/icons/FacebookIcon.svg'
import { ReactComponent as InstagramIcon } from './../../../image/icons/InstagramIcon.svg'
import { ReactComponent as TwitterIcon } from './../../../image/icons/TwitterIcon.svg'
import Footer from './../../../components/Footer'
import { addToCart } from '../../../actions/cartAction'

const ProductDetail = () => {
    const location = useLocation();
    const dispatch = useDispatch()
    // let urlParams = useParams();
    const { state: {
        pro_avatar,
        pro_sub_avatar,
        pro_name,
        pro_new_price,
        pro_old_price,
        pro_description,
        meta: {
            favs,
            votes
        }
    } } = location
    const handleAddToCart = (product) => {
        // const productExist = carts.find(item => item._id === product._id)
        // if (productExist) {
        //     setCarts(carts.map(item => item._id === product._id ? { ...productExist, orderQuantity: productExist.orderQuantity + 1 } : item))
        // } else {
        //     setCarts([...carts, { ...product, orderQuantity: 1 }])
        // }
        dispatch(addToCart(product, 1))
    }
    return (
        <>
            <div className={clsx(classes.productDetail, "wide")}>
                <div className={classes.productCart}>
                    <div className={classes.productImg}>
                        <div className={classes.subImg}>
                            <img src={`${pro_sub_avatar[0]} 2x`} alt="pro_sub_avatar" className={classes.item} />
                            <img src={`${pro_sub_avatar[1]} 2x`} alt="pro_sub_avatar" className={classes.item} />
                            <img src={`${pro_sub_avatar[2]} 2x`} alt="pro_sub_avatar" className={classes.item} />
                        </div>
                        <div className={classes.mainImg}>
                            <img src={`${pro_avatar} 2x`} alt="pro_avatar" />
                        </div>
                    </div>
                    <div className={classes.productInfo}>
                        <h3>{pro_name}</h3>
                        <div className={classes.favs}>
                            <span><BasicRating start={favs} /></span>
                            <span>{`(${votes || 0})`}</span>
                        </div>
                        <div className={classes.price}>
                            <span>${pro_new_price}</span>
                            <span>${pro_old_price}</span>
                        </div>
                        <p>{pro_description}</p>
                        <div className={classes.action}>
                            <button className='btn primary' onClick={() => handleAddToCart(location.state)}>Add To Cart</button>
                            <span><i className="far fa-heart"></i></span>
                        </div>
                        <div>
                            <span className={classes.title}>Categories:</span>
                        </div>
                        <div>
                            <span className={classes.title}>Tags</span>
                        </div>
                        <div className={classes.share}>
                            <span className={classes.title}>Share</span>
                            <div>
                                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><FacebookIcon /></a>
                                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><InstagramIcon /></a>
                                <a href="https://twitter.com/" target="_blank" rel="noreferrer"><TwitterIcon /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.related}>
                    <h1>Related Products</h1>
                </div>
                <div className={classes.img}>
                    <img srcSet="//live.staticflickr.com/65535/51796045806_4e8380c8c6_h.jpg 2x" alt='brand' />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ProductDetail
