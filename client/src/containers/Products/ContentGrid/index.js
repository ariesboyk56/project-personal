import React, { useContext } from 'react'
import { ProductContext } from '../../../contexts/ProductContext';
// import { LOCAL_STORAGE_PRODUCTS } from '../../../constants/proConstant';
import "./contentgrid.scss"
const ContentGrid = () => {
    // const [productAll, setProductAll] = useState(
    //     JSON.parse(localStorage.getItem(LOCAL_STORAGE_PRODUCTS))
    // )
    const {proState: {products}} = useContext(ProductContext)

    const showProduct = () => {
        return products.map((item, index) => {
            const {
                pro_avatar,
                pro_name,
                pro_new_price,
                pro_old_price,
            } = item
            return (
            <div key={index} className="col-xs-4 col-sm-4 col-md-4 col-lg-4">

                <div className='productGrid'>
                    <div className='productGrid-img'>
                        <img srcSet={`${pro_avatar} 2x`} alt={pro_name} />
                        <div className='productGrid-cart'>
                            <span><i className="fas fa-shopping-cart"></i></span>
                            <span><i className="far fa-heart"></i></span>
                            <span><i className="fas fa-search-plus"></i></span>
                        </div>
                    </div>
                    <div className='productGrid-info'>
                        <h3 className='productGrid-title'>{pro_name}</h3>
                        <div className='productGrid-total'>
                            <span className='new-price'>${pro_new_price}</span>
                            <span className='old-price'>${pro_old_price}</span>
                        </div>
                    </div>
                </div>
            </div>

            )
        })
    }
    return (
        <div className="row">
                {showProduct()}
        </div>
    )
}

export default ContentGrid
