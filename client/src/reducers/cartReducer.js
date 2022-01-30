import { ADD_TO_CART,DELETE_PRODUCT_IN_CART, UPDATE_PRODUCT_IN_CART, RESET_CART } from "../constants/cartConstant"

const data = JSON.parse(localStorage.getItem("cart"))
const initialState = data ? data : []

const cart = (state = initialState, action) => {
  const { type, product, quantity } = action
  var index = -1;
  switch (type) {
    case ADD_TO_CART:
      index = findProductInCart(state, product)
      if (index !== -1) {
        state[index].quantity += quantity
      } else {
        state.push({
          product,
          quantity
        })
      }
      localStorage.setItem("cart", JSON.stringify(state))
      return [...state]
    case UPDATE_PRODUCT_IN_CART:
      index = findProductInCart(state, product)
      if (index !== -1) {
        state[index].quantity = quantity
      }
      localStorage.setItem("cart", JSON.stringify(state))
      return [...state]
    case DELETE_PRODUCT_IN_CART:
      index = findProductInCart(state, product)
      if (index !== -1) {
        state.splice(index, 1)
      }
      localStorage.setItem("cart", JSON.stringify(state))
      return [...state]
    case RESET_CART:
      state=[]
      localStorage.removeItem("cart")
      return [...state]
    default:
      return [...state]
  }
}
const findProductInCart = (cart, product) => {
  var index = -1;
  if (cart.length > 0) {
    for (var i = 0; i < cart.length; i++) {
      if (cart[i].product._id === product._id) {
        index = i;
        break;
      }
    }
  }
  return index;
}
export default cart