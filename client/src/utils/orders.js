import { apiUrl } from "../api/Api";
import axios from "axios"
import { resetCart } from "../actions/cartAction";

export const createOrder = async (orderForm, navigate, dispatch) => {
    try {
        const response = await axios.post(`${apiUrl}/orders`, orderForm)
        if (response.data.success) {
            navigate(`/orders/${response.data.order._id}`)
            dispatch(resetCart())
        }
        return response.data
    } catch (error) {
        navigate("/auth/login")
        if (error.response.data) return error.response.data
        else return { success: false, message: error.message }
    }
}


  