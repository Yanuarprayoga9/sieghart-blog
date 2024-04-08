import { useDispatch } from 'react-redux'
import { signOut } from '../src/redux/user/user-slice';
import { Navigate } from 'react-router-dom';

export const Logout = () => {
    const dispatch = useDispatch();
    dispatch(signOut());
    <Navigate to={'/signin'} />
    


}