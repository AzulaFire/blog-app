import Purify from '@/app/components/Purify';
import prisma from '@/app/utils/db';
import Link from 'next/link';
import { notFound } from 'next/navigation';
const Filter = async ({ params }) => {
  // const response = await fetch(`https://dummyjson.com/posts/${params.id}`);
  // const post = await response.json();
  const posts = await prisma.post.findMany({
    where: {
      tag: params.tag,
    },
  });
  if (posts.length === 0) {
    notFound();
  }

  return (
    <main className='text-center pt-16 px-5'>
      <h1 className='text-4xl md:text-5xl font-bold mb-10'>
        {params.tag} Posts
      </h1>
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
    </main>
  );
};
export default Filter;
