import { useContext } from 'react';
import { Navigate} from 'react-router-dom'
import { AuthContext } from "../contexts/AuthContext"
const PrivateRoute = ({ children, ...rest }) => {
    let { authState: { user } } = useContext(AuthContext)
    return !user ? <Navigate to={"/auth/login"} /> : children
};

export default PrivateRoute;
