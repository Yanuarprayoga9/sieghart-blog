
import { Link } from 'react-router-dom';
import UserProfile from '../components/UserProfile';
import { useEffect, useState } from 'react';
import CardPost from '../components/CardPost';
import baseUrl from '../../constant/baseUrl';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch(baseUrl+'/post/getPosts?limit=8&');
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);
  return (
    <div className='w-full '>
      <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto sm:h-[400px]'>
        <h1 className='text-3xl font-bold lg:text-6xl'>Welcome to my Blog</h1>
        <p className='text-gray-500 text-xs sm:text-sm'>
          Here you'll find a variety of articles and tutorials on topics such as
          web development, software engineering, and programming languages.
        </p>
        <Link
          to='/search'
          className='text-xs sm:text-sm text-teal-500 font-bold hover:underline'
        >
          View all posts
        </Link>
      </div>
      <div className='p-3  dark:bg-slate-700'>
        <UserProfile />
      </div>

      <div className='w-full  max-w-8xl mx-auto p-3 flex flex-col gap-8 py-7'>
        {posts && posts.length > 0 && (
          <div className='flex flex-col gap-6 justify-center'>
            <h2 className='text-2xl font-semibold text-center justify-center'>Recent Posts</h2>
            <div className='flex flex-wrap gap-4 justify-center'>
              {posts.map((post) => (
                <CardPost key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={'/search'}
              className='text-lg text-teal-500 hover:underline text-center'
            >
              View all posts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
