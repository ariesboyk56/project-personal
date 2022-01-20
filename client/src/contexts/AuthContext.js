import axios from "axios"
import { createContext, useReducer, useEffect } from "react"
import { authReducer } from "../reducers/authReducer"
import { LOCAL_STORAGE_TOKEN } from "../constants/authConstant"
import { apiUrl } from "../api/Api"
import setAuthToken from "../utils/setAuthToken"
import { setAuth } from "../actions/authAction"

export const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {
    const [authState, dispatch] = useReducer(authReducer, {
        authLoading: true,
        isAuthenticated: false,
        user: null
    })

    //Authenticate user
    const loadUser = async () => {
        if (localStorage[LOCAL_STORAGE_TOKEN]) {
            setAuthToken(localStorage[LOCAL_STORAGE_TOKEN])
        }

        try {
            const response = await axios.get(`${apiUrl}/auth`)
            if (response.data.success) {
                dispatch(setAuth({
                    isAuthenticated: true,
                    user: response.data.user
                }))
            }
        } catch (error) {
            localStorage.removeItem(LOCAL_STORAGE_TOKEN)
            setAuthToken(null)
            dispatch(setAuth({
                isAuthenticated: false,
                user: null
            }))
        }
    }

    useEffect(()=>loadUser(), [])

    //Login
    const loginUser = async userForm => {
        try {
            const response = await axios.post(`${apiUrl}/auth/login`, userForm)
            if (response.data.success){
                localStorage.setItem(LOCAL_STORAGE_TOKEN, response.data.accessToken)
                loadUser()
            }
                
            return response.data
        } catch (error) {
            if (error.response.data) return error.response.data
            else return { success: false, message: error.message }
        }
    }

    //Log out user
    const logOut = () => {
            localStorage.removeItem(LOCAL_STORAGE_TOKEN)
            setAuthToken(null)
            dispatch(setAuth({
                isAuthenticated: false,
                user: null
            }))
    }

    //Context data
    const authContextData = { loginUser, authState, loadUser, logOut }

    return (
        <AuthContext.Provider value={authContextData}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider