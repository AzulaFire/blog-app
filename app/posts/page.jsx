import { Suspense } from 'react';
import PostsList from '../components/PostsList';
import Spinner from '../components/Spinner';

const Posts = () => {
  return (
    <main className='text-center pt-16 px-5'>
      <h1 className='text-4xl md:text-5xl font-bold mb-10'>All Posts</h1>
      <Suspense fallback={<Spinner />}>
        <PostsList />
      </Suspense>
    </main>
  );
};
export default Posts;
