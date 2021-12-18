import clsx from 'clsx'
import classes from './UniqueProduct.module.scss'
import productImg from './../../../image/products/group153.png'
const UniqueProduct = () => {
    return (
        <div className={classes.container}>
            <div className={clsx('wide',classes.content)}>
                <div className={classes.productImg}>
                    <img srcSet={`${productImg} 2x`} alt='Unique Product' />
                </div>
                <div className={classes.contentProduct}>
                    <h1>Unique Features Of leatest &amp; Trending Poducts</h1>
                    <ul className={classes.desc}>
                        <li className={classes.descItem}>All frames constructed with hardwood solids and laminates</li>
                        <li className={classes.descItem}>Reinforced with double wood dowels, glue, screw - nails corner
                            blocks and machine nails</li>
                        <li className={classes.descItem}>Arms, backs and seats are structurally reinforced</li>
                    </ul>
                    <div className={classes.action}>
                        <button className='btn primary'>Add To Cart</button>
                        <div className={classes.info}>
                            <span><strong>B&amp;B Italian Sofa</strong> </span>
                            <span>$32.00</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UniqueProduct
