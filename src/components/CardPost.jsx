import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Suspense } from 'react';
import { Loading } from './Loading';

export default function PostCard({ post }) {
    const date = new Date(post.createdAt)
    var formattedDate = date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric'});
    return (
        <div className='group relative w-full  hover:border-2 h-[400px] overflow-hidden rounded-lg sm:w-[300px] transition-all'>
            <Link to={`/post/${post.slug}`}>
                <img
                    src={post.image}
                    alt='post cover'
                    className='h-[300px] w-full  object-cover group-hover:h-[250px] transition-all duration-300 z-20'
                />
            </Link>
            <div className='p-3 flex flex-col gap-2'>
                <div className="flex justify-between border-b">
                <p className='text-lg font-semibold line-clamp-2 '>{post.title}</p>
                <p className='text-lg font-semibold line-clamp-2 opacity-50 text-sm '>{formattedDate}</p>

                </div>
                <Suspense fallback={<Loading />}>
                    <span className='italic text-sm'>{post.category}</span>
                    <Link
                        to={`/post/${post.slug}`}
                        className='z-10 group-hover:bottom-0 absolute bottom-[-200px] left-0 right-0 border   hover:bg-teal-500 hover:text-white transition-all duration-300 text-center py-2 rounded-md !rounded-tl-none m-2'
                    >
                        Read article
                    </Link>
                </Suspense>

            </div>
        </div>
    );
}


PostCard.propTypes = {
    post: PropTypes.object
}
