import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import { app } from '../firebase';
import { useDispatch, useSelector } from 'react-redux';
import { signInFailure, signInStart, signInSuccess } from '../redux/user/user-slice';
import { useNavigate } from 'react-router-dom';
import baseUrl from '../../constant/baseUrl'
import { Spinner } from "flowbite-react";

export default function OAuth() {
    const dispatch = useDispatch()
    const auth = getAuth(app)
    const navigate = useNavigate()
    const { loading } = useSelector(state => state.user)
    const handleGoogleClick = async () => {
        dispatch(signInStart)
        const provider = new GoogleAuthProvider()
        provider.setCustomParameters({ prompt: 'select_account' })
        try {
            const resultsFromGoogle = await signInWithPopup(auth, provider)
            const res = await fetch(baseUrl + '/auth/google', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: resultsFromGoogle.user.displayName,
                    email: resultsFromGoogle.user.email,
                    googlePhotoUrl: resultsFromGoogle.user.photoURL,
                }),
            })
            const data = await res.json()

            // console.log(data)
            if (res.ok) {
                dispatch(signInSuccess(data.user))
                navigate('/')
            }

        } catch (error) {
            // console.log(error);
            signInFailure(error.message)
        }
    }

    return (
        <button type='button' disabled={loading} className='text-black bg-white border-2 hover:bg-slate-50 focus:ring-4 focus:outline-none mt-3 focus:ring-blue-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' onClick={handleGoogleClick}>
            {
                loading ?
                    <Spinner aria-label="Alternate spinner button example" size="sm" />

                    :
                    <p>Continue with <span className='text-red-500'>Google</span></p>
            }
        </button>
    )
}
