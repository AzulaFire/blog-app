import prisma from '@/app/utils/db';
import AdminList from './AdminList';

const AdminForm = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const posts = await prisma.post.findMany({
    orderBy: [
      {
        createdAt: 'desc',
      },
    ],
  });

  return (
    <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
      <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mb-8'>
        <thead className='text-xs text-gray-900 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
          <tr>
            <th scope='col' className='px-6 py-3'>
              Title
            </th>
            <th scope='col' className='px-6 py-3'>
              Tag
            </th>
            <th scope='col' className='px-6 py-3'>
              Created At
            </th>
            <th scope='col' className='px-3 py-3'>
              Delete
            </th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <AdminList
              key={post.id}
              id={post.id}
              title={post.title}
              tag={post.tag}
              createdAt={post.createdAt}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default AdminForm;
