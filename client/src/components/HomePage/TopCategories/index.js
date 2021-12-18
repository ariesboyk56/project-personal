import clsx from 'clsx'
import classes from './TopCategories.module.scss'
import productImg from './../../../image/products/image1168.png'

const TopCategories = () => {
    return (
        <div className={clsx('wide', classes.container)}>
            <h1 className={classes.title}>Top Categories</h1>

            <div className={clsx("row", classes.containerProduct)}>
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <div className={classes.product}>
                        <div className={classes.imageActive}>
                            <div className={classes.image}>
                                <img srcSet={`${productImg} 2x`} alt="product" />
                                <a href="/" className={classes.productBtn}>View Details</a>
                            </div>
                        </div>
                        <div className={classes.info}>
                            <p className={classes.name}>Mini LCW Chair</p>
                            <p className={classes.price}>$56</p>
                        </div>
                    </div>
                </div>

                {/* copy product list(7 product): start */}
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <div className={classes.product}>
                        <div className={classes.imageActive}>
                            <div className={classes.image}>
                                <img srcSet={`${productImg} 2x`} alt="product" />
                                <a href="/" className={classes.productBtn}>View Details</a>
                            </div>
                        </div>
                        <div className={classes.info}>
                            <p className={classes.name}>Mini LCW Chair</p>
                            <p className={classes.price}>$56</p>
                        </div>
                    </div>
                </div>
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <div className={classes.product}>
                        <div className={classes.imageActive}>
                            <div className={classes.image}>
                                <img srcSet={`${productImg} 2x`} alt="product" />
                                <a href="/" className={classes.productBtn}>View Details</a>
                            </div>
                        </div>
                        <div className={classes.info}>
                            <p className={classes.name}>Mini LCW Chair</p>
                            <p className={classes.price}>$56</p>
                        </div>
                    </div>
                </div>
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <div className={classes.product}>
                        <div className={classes.imageActive}>
                            <div className={classes.image}>
                                <img srcSet={`${productImg} 2x`} alt="product" />
                                <a href="/" className={classes.productBtn}>View Details</a>
                            </div>
                        </div>
                        <div className={classes.info}>
                            <p className={classes.name}>Mini LCW Chair</p>
                            <p className={classes.price}>$56</p>
                        </div>
                    </div>
                </div>
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <div className={classes.product}>
                        <div className={classes.imageActive}>
                            <div className={classes.image}>
                                <img srcSet={`${productImg} 2x`} alt="product" />
                                <a href="/" className={classes.productBtn}>View Details</a>
                            </div>
                        </div>
                        <div className={classes.info}>
                            <p className={classes.name}>Mini LCW Chair</p>
                            <p className={classes.price}>$56</p>
                        </div>
                    </div>
                </div>
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <div className={classes.product}>
                        <div className={classes.imageActive}>
                            <div className={classes.image}>
                                <img srcSet={`${productImg} 2x`} alt="product" />
                                <a href="/" className={classes.productBtn}>View Details</a>
                            </div>
                        </div>
                        <div className={classes.info}>
                            <p className={classes.name}>Mini LCW Chair</p>
                            <p className={classes.price}>$56</p>
                        </div>
                    </div>
                </div>
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <div className={classes.product}>
                        <div className={classes.imageActive}>
                            <div className={classes.image}>
                                <img srcSet={`${productImg} 2x`} alt="product" />
                                <a href="/" className={classes.productBtn}>View Details</a>
                            </div>
                        </div>
                        <div className={classes.info}>
                            <p className={classes.name}>Mini LCW Chair</p>
                            <p className={classes.price}>$56</p>
                        </div>
                    </div>
                </div>
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <div className={classes.product}>
                        <div className={classes.imageActive}>
                            <div className={classes.image}>
                                <img srcSet={`${productImg} 2x`} alt="product" />
                                <a href="/" className={classes.productBtn}>View Details</a>
                            </div>
                        </div>
                        <div className={classes.info}>
                            <p className={classes.name}>Mini LCW Chair</p>
                            <p className={classes.price}>$56</p>
                        </div>
                    </div>
                </div>
                {/* copy product list: end */}
            </div>

            <ul className={classes.dotSlide}>
                <li className={clsx(classes.dotItem, classes.active)}></li>
                <li className={classes.dotItem}></li>
                <li className={classes.dotItem}></li>
            </ul>
        </div>
    )
}

export default TopCategories
