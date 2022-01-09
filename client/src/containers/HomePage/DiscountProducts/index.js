import React, { useState } from 'react';
import clsx from 'clsx'
import classes from './DiscountProducts.module.scss'
import productImg from './../../../image/products/Group154.svg'

const DiscountProducts = () => {
    // const $ = document.querySelector.bind(document);
    // const $$ = document.querySelectorAll.bind(document);
    // window.addEventListener("load", () => {
    //     const listsDiscount = $$(`.${classes.discountListItem}`)
    //     const itemActive = $(`.${classes.discountListItem}.${classes.activeDiscount}`)
    //     const lineActive = $(`.${classes.lineActive}`)

    //     lineActive.style.left = itemActive.offsetLeft + 'px'
    //     lineActive.style.width = itemActive.offsetWidth + 'px'

    //     listsDiscount.forEach((item, index) => {
    //         item.onclick = function () {
    //             $(`.${classes.discountListItem}.${classes.activeDiscount}`).classList.remove(classes.activeDiscount)

    //             lineActive.style.left = this.offsetLeft + 'px'
    //             lineActive.style.width = this.offsetWidth + 'px'

    //             this.classList.add(classes.activeDiscount)
    //         }
    //     });
    // })
    const [check, setCheck] = useState(
        [
            {
                name: "Wood Chair",
                isActive: true
            },
            {
                name: "Plastic Chair",
                isActive: false
            },
            {
                name: "Sofa Colletion",
                isActive: false
            }
        ]
    )
    const showSubMenu = (check) => {
        return check.map((item, index) => {
            return <span
                key={index}
                className={item.isActive ? classes.active : null}
                onClick={(event) => handleActive(event, index)}
            >
                {item.name}
            </span>
        })
    }
    const handleActive = (e, index) => {
        var result = []
        check.map((item, i)=>{
    
            result.push({
                name: item.name,
                isActive: false
            })
            if(index === i){
                result[index].isActive = true
            }
        })
        setCheck(result)
    }
    return (
        <div className={classes.container}>
                <h1 className={classes.title}>Discount Item</h1>
            <div className={clsx('wide', classes.content)}>
                <div className={classes.discountListFilter}>
                {showSubMenu(check)}
                </div>
                <div className="row">
                    <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                        <div className={classes.contentProduct}>
                            <h1>20% Discount Of All Products</h1>
                            <span>Eams Sofa Compact</span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.</p>
                            <div className={classes.desc}>
                                <div className={classes.descLeft}>
                                    <span className={classes.descItem}>Material expose like metals</span>
                                    <span className={classes.descItem}>Simple neutral colours.</span>
                                </div>
                                <div className={classes.Right}>
                                    <span className={classes.descItem}>Clear lines and geomatric figures</span>
                                    <span className={classes.descItem}>Material expose like metals</span>
                                </div>
                            </div>
                            <button className='btn primary'>Show Now</button>
                        </div>
                    </div>

                    <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                        <div className={classes.productImg}>
                            <img srcSet={productImg} alt="img" />
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default DiscountProducts
