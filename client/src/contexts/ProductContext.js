import axios from "axios";
import { createContext, useReducer } from "react"
import { fetchProducts } from "../actions/proAction";
import { apiUrl } from "../api/Api"
import { proReducer } from "../reducers/proReducer";

export const ProductContext = createContext()

const ProductContextProvider = ({ children }) => {
    const [proState, dispatch] = useReducer(proReducer, {
        proLoading: true,
        products: null,
        totalPages: null
    })
    const loadProduct = async params => {
        let page = params.page || 0
        let search = params.search || ''
        let limit = 3
        try {
            const response = await axios.get(`${apiUrl}/products?page=${page}&limit=${limit}&q=${search}`)
            if (response.data.success) {
                dispatch(fetchProducts({
                    products: response.data.products,
                    totalPages: response.data.totalPages
                }))
            }
            return response.data
        } catch (error) {
            console.log(error);
            dispatch(fetchProducts({
                products: null,
                totalPages: null
            }))
        }
    }

    //Context data
    const proContextData = { proState, loadProduct }
    return (
        <ProductContext.Provider value={proContextData}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductContextProvider

