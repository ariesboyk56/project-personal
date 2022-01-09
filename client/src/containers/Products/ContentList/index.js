import React, { useContext } from 'react'
import { ProductContext } from '../../../contexts/ProductContext';
import BasicRating from '../Rating';
import "./contentlist.scss"


const ContentList = () => {
    const {proState: {products}} = useContext(ProductContext)
    const showProduct = () => {
        return products.map((item, index) => {
            const {
                pro_avatar,
                pro_name,
                meta,
                pro_new_price,
                pro_old_price,
                pro_description
            } = item
            return (
                <div key={index} className='productList'>
                    <div className='productList-img'>
                        <img srcSet={`${pro_avatar} 2x`} alt={pro_name} />
                    </div>
                    <div className='productList-info'>
                        <h3 className='productList-title'>{pro_name}</h3>
                        <div className='productList-total'>
                            <span className='new-price'>${pro_new_price}</span>
                            <span className='old-price'>${pro_old_price}</span>
                            <span className='favs'><BasicRating start={meta.favs} /></span>
                        </div>
                        <p>{pro_description}</p>
                        <div className='productList-cart'>
                            <span><i className="fas fa-shopping-cart"></i></span>
                            <span><i className="far fa-heart"></i></span>
                            <span><i className="fas fa-search-plus"></i></span>
                        </div>
                    </div>
                </div>
            )
        })
    }


    return (
        <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                {showProduct()}
            </div>
        </div>
    )
}

export default ContentList
