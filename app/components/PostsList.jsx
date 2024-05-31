import Link from 'next/link';
import prisma from '@/app/utils/db';
import Purify from './Purify';

const PostsList = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  // By default, NextJS components are Server Side Components so we can fetch data directly without the useEffect hook
  // const response = await fetch('https://dummyjson.com/posts?limit=10');
  // const data = await response.json();
  const posts = await prisma.post.findMany({
    orderBy: [
      {
        createdAt: 'desc',
      },
    ],
  });

  return (
    <div className='flex flex-col w-full text-start'>
      {posts.map((post) => (
        <div key={post.id} className='border-b-2 hover:bg-zinc-100 py-4 px-4'>
          <Link
            href={`/posts/${post.id}`}
            className='text-3xl text-zinc-900 font-semibold hover:underline'
          >
            {post.title}
          </Link>
          <div className='text-xs text-zinc-400 mt-1 ml-1'>
            Posted on {JSON.stringify(post.createdAt).substring(1, 11)} -{' '}
            {post.tag}
          </div>
          <div className='my-4 text-justify'>
            <Purify body={post.body.substring(0, 400)} />
          </div>
        </div>
      ))}
    </div>
  );
};
export default PostsList;
