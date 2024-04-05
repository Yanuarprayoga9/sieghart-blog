import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import { app } from '../firebase';
import { useDispatch } from 'react-redux';
import { signInSuccess } from '../redux/user/user-slice';
import { useNavigate } from 'react-router-dom';
import baseUrl from '../../constant/baseUrl';

export default function OAuth() {
    const auth = getAuth(app)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleGoogleClick = async () =>{
        const provider = new GoogleAuthProvider()
        provider.setCustomParameters({ prompt: 'select_account' })
        try {
            const resultsFromGoogle = await signInWithPopup(auth, provider)
            const res = await fetch(baseUrl+'/auth/google', {
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
            if (res.ok){
                dispatch(signInSuccess(data.user))
                navigate('/')
            }
        } catch (error) {
            // console.log(error);
        }
    } 
  return (
    <button type='button'  className='text-black bg-white border-2 hover:bg-slate-50 focus:ring-4 focus:outline-none mt-3 focus:ring-blue-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' onClick={handleGoogleClick}>
        
        Continue with <span className='text-red-500'>Google</span>
    </button>
  )
}
