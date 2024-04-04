import { PageTitle } from '../components/PageTitle'
import { useDispatch, useSelector } from 'react-redux'
import { signInStart, signInSuccess, signInFailure } from '../redux/user/user-slice'
import { ButtonComp } from '../components/Button'
import { useNavigate } from 'react-router-dom';
import baseUrl from '../../constant/baseUrl';
import axios from 'axios';
const SignIn = () => {
  const dispatch = useDispatch()
  const loading = useSelector((state => state.user.loading))
  const message = useSelector((state => state.user.message))
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {

      dispatch(signInStart());
      const res = await fetch(`${baseUrl}/auth/signin`, {
        // const res = await fetch('http://localhost:5555/v1/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          "username": "user",
          "email": "trial123@gmail.com",
          "password": "trial123"
        }),
      });
      // const res = axios.post(`${baseUrl}/auth/signin`,{
      //   "username": "user",
      //   "email": "trial123@gmail.com",
      //   "password": "trial123"
      // })
      const data = await res.json();
      console.log(data.user._id)
      if (data.success === false) {
        dispatch(signInFailure(data.message));
      }

      if (res.ok) {
        dispatch(signInSuccess(data));
        navigate('/');
      }
    } catch (error) {
      dispatch(signInFailure('Login Failed'));

    }
  }

  return (
    <div className='min-h-screen w-full flex flex-col justify-center items-center p-3'>
      <div className="w-full grid sm:grid-cols-2">
        <div className="mx-auto">
          <PageTitle title={'SieghartBlog'} />
        </div>

        <form className="w-full" onSubmit={onSubmit}>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
            <input type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
            <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
          {loading}
          <ButtonComp type={'submit'} title={'Sign In'} loading={loading} />
          {message && message ?
            <p className='text-red-400 text-center'>{message}</p>
            : null}
        </form>

      </div>
    </div>
  )
}

export default SignIn