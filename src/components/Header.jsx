import { Button, Navbar, TextInput } from 'flowbite-react';
import { Link, Navigate, useLocation } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon } from 'react-icons/fa';
import { Dropdown } from 'flowbite-react';
import { Avatar } from 'flowbite-react';
import { useDispatch, useSelector } from 'react-redux';

import { signOut } from '../redux/user/user-slice';
export default function Header() {

  const dispatch = useDispatch();
  const path = useLocation().pathname;
  const { currentUser } = useSelector(state => state.user)
  const handleSignout = async () => {
    dispatch(signOut());

    <Navigate to={'/signin'} />
  };
  return (
    <Navbar className='border-b-2'>
      <Link
        to='/'
        className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'
      >
        SieghartCode
        Blog
      </Link>
      <form>
        <TextInput
          type='text'
          placeholder='Search...'
          rightIcon={AiOutlineSearch}
          className='hidden lg:inline'
        />
      </form>
      <Button className='w-12 h-10 lg:hidden' color='gray' pill>
        <AiOutlineSearch />
      </Button>
      <div className='flex gap-2 md:order-2'>
        <Button className='w-12 h-10 hidden sm:inline' color='gray' pill>
          <FaMoon />
        </Button>
        {
          currentUser && currentUser ?
            <Dropdown inline label={<Avatar rounded img={currentUser.profilePicture} />} >
              <Dropdown.Item>
                <div className="flex flex-col">
                  <p className='font-bold'>{currentUser.username}</p>
                  <p>{currentUser.email}</p>
                </div>
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>setting</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item onClick={handleSignout}>
                Sign Out
              </Dropdown.Item>
            </Dropdown>
            :

            <Link to='/sign-in'>
              <Button >Sign In</Button>
            </Link>

        }
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={path === "/"} as={'div'}>
          <Link to='/'>Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/about"} as={'div'}>
          <Link to='/about'>About</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/projects"} as={'div'}>
          <Link to='/projects'>Projects</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
