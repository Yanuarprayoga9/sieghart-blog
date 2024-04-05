import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom";
export const AuthRoute = () => {

    const { currentUser } = useSelector(state => state.user);

    return !currentUser ? <Outlet /> : <Navigate to={'/dashboard'} />


}

