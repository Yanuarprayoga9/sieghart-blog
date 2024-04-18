import { Button, Navbar, TextInput } from 'flowbite-react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon, FaSun } from 'react-icons/fa';
import { Dropdown } from 'flowbite-react';
import { Avatar } from 'flowbite-react';
import { useDispatch, useSelector } from 'react-redux';

import { signOut } from '../redux/user/user-slice';
import { toggleTheme } from '../redux/theme/theme-slice';
import { useEffect, useState } from 'react';
export default function Header() {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const location = useLocation()
  const path = location.path
  const { currentUser } = useSelector(state => state.user)
  const { theme } = useSelector((state) => state.theme);
  const navigate = useNavigate()
  const handleSignout = async () => {
    dispatch(signOut());

    <Navigate to={'/signin'} />
  };
  const onChange = (e) => {
    setSearchTerm(e.target.value)
  }
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
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
      <form onSubmit={handleSubmit} className=''>
        <TextInput
          type='text'
          placeholder='Search...'
          rightIcon={AiOutlineSearch}
          onChange={onChange}
          value={searchTerm}
          className='hidden lg:inline'
        />
      </form>
      <Button className='w-12 h-10 lg:hidden' color='gray' pill onClick={()=> navigate('/search')}>
        <AiOutlineSearch />
      </Button>
      <div className='flex gap-2 md:order-2'>
        <Button
          className='w-12 h-10  sm:inline'
          color='gray'
          pill
          onClick={() => dispatch(toggleTheme())}
        >
          {theme === 'light' ? <FaSun /> : <FaMoon />}
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
              <Dropdown.Item>
                <Link to={'/dashboard?tab=profile'} >profile</Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to={'/dashboard?tab=dashboard'} >dashboard</Link>
              </Dropdown.Item>
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
        <Navbar.Link active={path === "/contributions"} as={'div'}>
          <Link to='/contributions'>Contributions</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
