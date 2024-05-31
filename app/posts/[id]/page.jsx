import Purify from '@/app/components/Purify';
import prisma from '@/app/utils/db';
import Image from 'next/image';
import { notFound } from 'next/navigation';
const Post = async ({ params }) => {
  // const response = await fetch(`https://dummyjson.com/posts/${params.id}`);
  // const post = await response.json();
  const post = await prisma.post.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });
  if (!post) {
    notFound();
  }
  return (
    <main className='text-center pt-16 px-5'>
      <h1 className='text-4xl md:text-5xl font-bold mb-2'>{post.title}</h1>
      <div className='text-xs text-zinc-400 ml-1 mb-4'>
        Posted on {JSON.stringify(post.createdAt).substring(1, 11)}
        {' - '}
        {post.tag}
      </div>
      {post.image && (
        <div>
          <div className='relative lg:h-[600px] md:h-[400px] h-[300px] w-full'>
            <Image
              src={post.image}
              alt={post.title}
              fill={true}
              sizes='100vw'
              className='shadow rounded'
              priority={true}
            />
          </div>
          <span className='text-sm text-zinc-400 mt-2'>
            Image source: {post.credit}
          </span>
        </div>
      )}
      <div className='px-4 mx-auto my-10 text-justify'>
        <Purify body={post.body} />
      </div>
    </main>
  );
};
export default Post;
