import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Button,
  Label,
  Radio,
  Select,
  Textarea,
  TextInput,
} from "flowbite-react";
import baseUrl from '../../constant/baseUrl';
import { Loading } from '../components/Loading';
import CardPost from '../components/CardPost';
const Search = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const { search, pathname } = useLocation()
  const navigate = useNavigate()
  const [sidebarData, setSidebarData] = useState({
    searchTerm: '',
    sort: 'desc',
    category: 'uncategorized',
  });

  useEffect(() => {
    const urlParams = new URLSearchParams(search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    const sortFromUrl = urlParams.get('sort');
    const categoryFromUrl = urlParams.get('category');
    if (searchTermFromUrl || sortFromUrl || categoryFromUrl) {
      setSidebarData({
        ...sidebarData,
        searchTerm: searchTermFromUrl,
        sort: sortFromUrl,
        category: categoryFromUrl,
      });
    }

    const fetchPosts = async () => {
      setLoading(true);
      const searchQuery = urlParams.toString();
      const res = await fetch(`${baseUrl}/post/getposts?${searchQuery}`);
      if (!res.ok) {
        setLoading(false);
        return;
      }
      if (res.ok) {
        const data = await res.json();
        console.group(data)
        setPosts(data.posts);
        setLoading(false);
        if (data.posts.length === 9) {
          setShowMore(true);
        } else {
          setShowMore(false);
        }
      }
    };
    fetchPosts();
  }, [search]);
  const onSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(search);
    urlParams.set('searchTerm', sidebarData.searchTerm);
    urlParams.set('sort', sidebarData.sort);
    urlParams.set('category', sidebarData.category);
    const searchQuery = urlParams.toString();
    console.log(searchQuery)
    navigate(`/search?${searchQuery}`);
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSidebarData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };
  return (
    <div className='w-full min-h-screen'>
      <div className="flex flex-col sm:flex-row">
        <div className=" w-full sm:w-1/4 sm:min-h-screen sm:py-52 p-2 border-r-2">
          <p className='text-3xl'>Search</p>
          <form onSubmit={onSubmit} className='space-y-4'>
            <div>
              <TextInput onChange={handleChange} value={sidebarData.searchTerm} name="searchTerm" type="text" placeholder="search..." />
            </div>
            <div className="flex">
              <Select
                onChange={handleChange}
                name='sort'
                value={sidebarData.sort || 'desc'}
              >
                <option defaultValue={'desc'} >desc</option>
                <option value={'asc'}>asc</option>
              </Select>
              <Select
                name='category'
                onChange={handleChange}
                value={sidebarData.category || 'uncategorized'}
              >
                <option value=''>ALL</option>
                <option value='reactjs'>React.js</option>
                <option value='nextjs'>Next.js</option>
                <option value='javascript'>JavaScript</option>
              </Select>
            </div>
            <Button type='submit'>go</Button>
          </form>
        </div>
        <div className=" w-full sm:w-3/4 sm:min-h-screen">
          <p className='p-3 text-3xl border-b-2'>Results</p>
          {loading && <Loading />}
          {
            posts && posts.length > 0 ?
              (
                <div className='flex flex-wrap gap-4 justify-center p-2'>
                  {posts.map((post) => (
                    <CardPost key={post._id} post={post} />
                  ))}
                </div>
              )
              :
              (
                <h1>Post not found</h1>
              )
          }
        </div>
      </div>
    </div>
  )
}

export default Search