import clsx from 'clsx'
import classes from './LeatestProducts.module.scss'
import imgitems from '../../../image/products/image1166.png'
import saleimg from '../../../image/products/Sales.png'
const data = [
    {
        url: imgitems,
        isSale: true,
        name: 'Comfort Handy Craft',
        newPrice: 42.00,
        oldPrice: 65.00
    },
    {
        url: imgitems,
        isSale: false,
        name: 'Comfort Handy Craft',
        newPrice: 42.00,
        oldPrice: 65.00
    },
    {
        url: imgitems,
        isSale: false,
        name: 'Comfort Handy Craft',
        newPrice: 42.00,
        oldPrice: 65.00
    },
    {
        url: imgitems,
        isSale: false,
        name: 'Comfort Handy Craft',
        newPrice: 42.00,
        oldPrice: 65.00
    },
    {
        url: imgitems,
        isSale: false,
        name: 'Comfort Handy Craft',
        newPrice: 42.00,
        oldPrice: 65.00
    },
    {
        url: imgitems,
        isSale: false,
        name: 'Comfort Handy Craft',
        newPrice: 42.00,
        oldPrice: 65.00
    }
]
const LeatestProducts = () => {
    const $ = document.querySelector.bind(document);
    const $$ = document.querySelectorAll.bind(document);
    window.addEventListener("load", () => {
        const lists = $$(`.${classes.leatestListItem}`)

        const itemActive = $(`.${classes.leatestListItem}.${classes.active}`)
        const lineActive = $(`.${classes.lineActive}`)

        lineActive.style.left = itemActive.offsetLeft + 'px'
        lineActive.style.width = itemActive.offsetWidth + 'px'

        lists.forEach((item, index) => {
            item.onclick = function () {
                $(`.${classes.leatestListItem}.${classes.active}`).classList.remove(classes.active)

                lineActive.style.left = this.offsetLeft + 'px'
                lineActive.style.width = this.offsetWidth + 'px'

                this.classList.add(classes.active)
            }
        });
    })
    const showLeatestProducts = (data) => {
        return data.map((item, index) => {
            return <div key={index} className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <div className={classes.leatestProducts}>
                    {item.isSale ? <img className={classes.leatestSale} srcSet={`${saleimg} 2x`} alt="sale" /> : null}
                    <ul className={classes.leatestAction}>
                        <li><i className="fas fa-shopping-cart"></i></li>
                        <li><i className="far fa-heart"></i></li>
                        <li><i className="fas fa-search-plus"></i></li>
                    </ul>
                    <div className={classes.leatestImg}>
                        <img srcSet={`${item.url} 2x`} alt="Leatest Products" />
                    </div>
                    <div className={classes.leatestInfo}>
                        <div className={classes.leatestName}>{item.name}</div>
                        <div className={classes.leatestPrice}>
                            <span className={clsx(classes.leatestNewPrice, 'mr-10')}>${item.newPrice}</span>
                            <span className={classes.leatestOldPrice}>${item.oldPrice}</span>
                        </div>
                    </div>
                </div>
            </div>
        })
    }
    return (
        <>
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <h1 className={classes.leatestTitle}>Leatest Products</h1>
                    <div className={classes.leatestListFilter}>
                        <span className={clsx(classes.leatestListItem, classes.active)}>New Arrival</span>
                        <span className={classes.leatestListItem}>Best Seller</span>
                        <span className={classes.leatestListItem}>Featured</span>
                        <span className={classes.leatestListItem}>Special Offer</span>
                        <span className={classes.lineActive}></span>
                    </div>
                </div>
            </div>


            <div className={clsx('row', classes.wrapperFeature)}>
                {showLeatestProducts(data)}
            </div>

        </>
    )
}

export default LeatestProducts
