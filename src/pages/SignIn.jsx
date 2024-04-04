import { PageTitle } from '../components/PageTitle'
import { useDispatch, useSelector } from 'react-redux'
import { signInStart, signInSuccess, signInFailure } from '../redux/user/user-slice'
import { ButtonComp } from '../components/Button'

const SignIn = () => {
  const dispatch = useDispatch()
  const loading = useSelector((state => state.user.loading))
  const message = useSelector((state => state.user.message))
  const onSubmit = (e) => {
    e.preventDefault();
    try {
      const success = Math.floor(Math.random() * 2);
      console.log(success)
      if (success == 1) {
        dispatch(signInStart());
        setTimeout(() => {
          dispatch(signInSuccess('test'));
          console.log('success', loading)
        }, 2000)
      }else {
        throw Error

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