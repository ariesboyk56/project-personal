
const initialState = {}

const store = (state=initialState, action) => {
  // let newState
  switch (action.type) {
    case "SET_STORE":
      return {...state}
    default:
      return state
  }
}
export default store