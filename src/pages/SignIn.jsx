import { PageTitle } from '../components/PageTitle'
import { useDispatch, useSelector } from 'react-redux'
import { signInStart, signInSuccess, signInFailure } from '../redux/user/user-slice'
import { ButtonComp } from '../components/Button'
import { Link, useNavigate } from 'react-router-dom';
import baseUrl from '../../constant/baseUrl';
import { useForm } from '../../hooks/useForm';
import OAuth from '../components/Oauth';
import toast, { Toaster } from 'react-hot-toast';

const SignIn = () => {
  const { values, handleChange } = useForm({ email: '', password: '' });

  const dispatch = useDispatch()
  const loading = useSelector((state => state.user.loading))
  const error = useSelector((state => state.user.error))
  const navigate = useNavigate();
  const notify = () => toast.error("Invalid credentials");
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch(`${baseUrl}/auth/signin`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      const data = await res.json();
      localStorage.setItem('access_token', data.token)
      if (data.success === false) {
        dispatch(signInFailure("Invalid Credentials"));
      }

      if (res.ok) {
        dispatch(signInSuccess(data.user));
        navigate('/');
      }
    } catch (error) {
      dispatch(signInFailure('Invalid Credentials'));

    }
  }
  console.log(error)

  if (error) notify()

  return (
    <div className="min-h-screen ">
      <div className='py-32 w-full flex  flex-col justify-center items-center px-3'>
        <div className="w-full grid sm:grid-cols-2 items-center ">
          <div className="mx-auto">
            <PageTitle title={'SieghartBlog'} />
          </div>

          <form className="max-w-[500px]" onSubmit={onSubmit}>
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
              <input type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
              <input
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <ButtonComp type={'submit'} title={'Sign In'} loading={loading} />
            <OAuth />

            <Link to='/sign-up'>sign up here</Link>

          </form>

        </div>
        <Toaster />

      </div>
    </div>
  )
}

export default SignIn