import clsx from 'clsx'
import classes from './TrendingProducts.module.scss'
import productImg from './../../../image/products/image1168.png'
import product1Sell from './../../../image/products/image1162.png'
import product2Sell from './../../../image/products/image1161.png'
import product3Sell from './../../../image/products/image30.png'
const data = [
    {
        url: productImg,
        name: 'Cantilever chair',
        newPrice: 26,
        oldPrice: 42
    },
    {
        url: productImg,
        name: 'Cantilever chair',
        newPrice: 26,
        oldPrice: 42
    },
    {
        url: productImg,
        name: 'Cantilever chair',
        newPrice: 26,
        oldPrice: 42
    },
    {
        url: productImg,
        name: 'Cantilever chair',
        newPrice: 26,
        oldPrice: 42
    }
]
const TrendingProducts = () => {
    const showTrendingProduct = () => {
        return data.map((item, index) => {
            return <div key={index} className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <div className={classes.contentProduct}>
                    <div className={classes.productImg}>
                        <img srcSet={`${item.url} 2x`} alt='porduct image' />
                    </div>
                    <div className={classes.desc}>
                        <h3>{item.name}</h3>
                        <div className={classes.price}>
                            <span className={classes.newPrice}>${item.newPrice}</span>
                            <span className={classes.oldPrice}>${item.oldPrice}</span>
                        </div>
                    </div>
                </div>
            </div>
        })
    }
    return (
        <div className="wide">
            <div className={classes.container}>
                <h1>Trending Products</h1>

                <div className="row">
                    {showTrendingProduct(data)}
                </div>
                <div className={clsx('row', classes.containerSellOff)}>
                    <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9">

                        <div className="row">
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                <div className={classes.productLeftSell}>
                                    <div className={classes.productDesc}>
                                        <h3>23% off in all products</h3>
                                        <a href="#">Shop Now</a>
                                    </div>
                                        <img srcSet={`${product1Sell} 2x`} alt="product sell off" />
                                </div>
                            </div>
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                <div className={classes.productMidSell}>
                                    <div className={classes.productDesc}>
                                        <h3>23% off in all products</h3>
                                        <a href="#">View Collection</a>
                                    </div>
                                        <img srcSet={`${product2Sell} 2x`} alt="product sell off" />
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                        <div className={classes.contentRightSell}>
                            <div className={classes.productRightSell}>
                                <div className={classes.productImg}>
                                    <img srcSet={`${product3Sell} 2x`} alt="sell product" />
                                </div>
                                <div className={classes.productDesc}>
                                    <span>Executive Seat chair</span>
                                    <span>$32.00</span>
                                </div>
                            </div>
                            {/* Copy product list: Start */}
                            <div className={classes.productRightSell}>
                                <div className={classes.productImg}>
                                    <img srcSet={`${product3Sell} 2x`} alt="sell product" />
                                </div>
                                <div className={classes.productDesc}>
                                    <span>Executive Seat chair</span>
                                    <span>$32.00</span>
                                </div>
                            </div>
                            <div className={classes.productRightSell}>
                                <div className={classes.productImg}>
                                    <img srcSet={`${product3Sell} 2x`} alt="sell product" />
                                </div>
                                <div className={classes.productDesc}>
                                    <span>Executive Seat chair</span>
                                    <span>$32.00</span>
                                </div>
                            </div>
                            {/* Copy product list:  End */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrendingProducts
