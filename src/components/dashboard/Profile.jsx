import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { Alert, Button, Modal, ModalBody, TextInput } from 'flowbite-react';
import { useState } from 'react';

const Profile = () => {
  const { currentUser, error, loading } = useSelector((state) => state.user);
  const [imageFileUploading, setImageFileUploading] = useState(false);

  console.log({ currentUser });
  return (
    <div className='max-w-lg mx-auto p-3 w-full'>
      <h1 className='my-7 text-center font-semibold text-3xl'>Profile</h1>
      <form action="" className='flex flex-col gap-4'>

        <div
          className='relative w-32 h-32 self-center cursor-pointer shadow-md overflow-hidden rounded-full'
        >
          <img
            src={currentUser.profilePicture}
            alt='user'
            className={`rounded-full w-full h-full object-cover border-8 border-[lightgray] ${
              // imageFileUploadProgress &&
              // imageFileUploadProgress < 100 &&
              'opacity-60'
              }`}
          />
        </div>

        <TextInput
          type='text'
          id='username'
          placeholder='username'
          defaultValue={currentUser.username}
        // onChange={handleChange}
        />
        <TextInput
          type='email'
          id='email'
          placeholder='email'
          defaultValue={currentUser.email}
        // onChange={handleChange}
        />
        <TextInput
          type='password'
          id='password'
          placeholder='password'
        // onChange={handleChange}
        />
        <Button
          type='submit'
          color='blue'
          disabled={loading || imageFileUploading}
        >
          {loading ? 'Loading...' : 'Update'}
        </Button>
        {currentUser.isAdmin && (
          <Link to={'/create-post'}>
            <Button
              type='button'
              color='blue'

              className='w-full'
            >
              Create a post
            </Button>
          </Link>
        )}
      </form>
      <div className="text-red-500 flex justify-between mt-5">
        <span className='cursor-pointer'>Delete Account</span>
        <span className='cursor-pointer'>Sign Out</span>
      </div>
    </div>
  )
}

export default Profile