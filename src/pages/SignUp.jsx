import { PageTitle } from '../components/PageTitle'
import { ButtonComp } from '../components/Button'
import { useNavigate } from 'react-router-dom';

import { useForm } from '../../hooks/useForm';
import { useState } from 'react';
import baseUrl from '../../constant/baseUrl';
import OAuth from '../components/Oauth';
import { Link } from 'react-router-dom';
const SignUp = () => {
  const { values, handleChange } = useForm({ username: '', email: '', password: '' });
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState(null)

  const navigate = useNavigate();

  const onSubmit = async (e) => {

    e.preventDefault();
    setMessage(null)
    try {
      setLoading(true)
      const res = await fetch(baseUrl + '/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      const data = await res.json()
      if (data.success) {
        navigate('/sign-in')
        console.log(data.success);
      }
      if (data.success === false) {
        setMessage('user already registered')
      }
    } catch (error) {
      setMessage('user already registered')
      setLoading(false)
    } finally {
      setLoading(false)
    }

  }


  return (
    <div className="min-h-screen ">
      <div className='py-32 w-full flex  flex-col justify-center items-center px-3'>
        <div className="w-full grid sm:grid-cols-2 items-center ">
          <div className="mx-auto">
            <PageTitle title={'Sign Up'} />
          </div>

          <form className="max-w-[500px]" onSubmit={onSubmit}>
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your username</label>
              <input type="text"
                name="username"
                value={values.username}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@flowbite.com"
                required
                min={1}
              />
            </div>
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
              <input type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@flowbite.com"
                required
                min={1}
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
                min={8}
              />
            </div>
            <ButtonComp type={'submit'} title={'Sign In'} loading={loading} />
            <OAuth />
            {message && message ?
              <p className='text-red-400 text-center'>{message}</p>
              : null}
            <Link to='/sign-in'>sign in here</Link>
          </form>

        </div>
      </div>
    </div>
  )
}

export default SignUp