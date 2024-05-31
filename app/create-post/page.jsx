import dynamic from 'next/dynamic';
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components';
import AdminForm from '../components/AdminForm';
const PostForm = dynamic(() => import('../components/PostForm'), {
  ssr: false,
});

const CreatePost = () => {
  return (
    <main className='text-center pt-16'>
      <h1 className='text-4xl md:text-5xl font-bold mb-10'>Create Post</h1>
      <PostForm />
      <AdminForm />
      <div className='mt-12'>
        <LogoutLink className='text-center text-sm underline text-blue-900'>
          Logout
        </LogoutLink>
      </div>
    </main>
  );
};
export default CreatePost;
