import React from 'react'
import classes from './BannerSubscribe.module.scss'
// import brandImg from './../../../image/brand.png'

const BannerSubscribe = () => {
    return (
        <div className={classes.banner}>
            <div className={classes.bannerSubscribe}>
                <div className={classes.bannerDesc}>
                    <h1>Get Leatest Update By Subscribe Our Newslater</h1>
                    <button className='btn primary'>Shop Now</button>
                </div>
            </div>
            <div className={classes.bannerBrand}>
                {/* <img srcSet={`${brandImg} 2x`} alt='brand' /> */}
                <img srcSet="//live.staticflickr.com/65535/51796045806_4e8380c8c6_h.jpg 2x" alt='brand' />
                
            </div>
        </div>
    )
}

export default BannerSubscribe
