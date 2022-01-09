import React from 'react';
import classes from './ShopOffer.module.scss'
import img1 from './../../../image/offer/free-delivery1.png'
import img2 from './../../../image/offer/cashback1.png'
import img3 from './../../../image/offer/premium-quality1.png'
import img4 from './../../../image/offer/group.png'

const ShopOffer = () => {
    return (
        <div className={classes.offer}>
            <h1>What Shopex Offer!</h1>
            
            
            <div className="row">
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <div className={classes.offerContent}>
                        <img srcSet={`${img1} 2x`} alt='offer image'/>
                        <h3>24/7 Support</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                    </div>
                </div>
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <div className={classes.offerContent}>
                        <img srcSet={`${img2} 2x`} alt='offer image'/>
                        <h3>24/7 Support</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                    </div>
                </div>
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <div className={classes.offerContent}>
                        <img srcSet={`${img3} 2x`} alt='offer image'/>
                        <h3>24/7 Support</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                    </div>
                </div>
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <div className={classes.offerContent}>
                        <img srcSet={`${img4} 2x`} alt='offer image'/>
                        <h3>24/7 Support</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default ShopOffer
