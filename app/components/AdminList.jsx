'use client';
import { FaRegTrashAlt } from 'react-icons/fa';
import { deletePost } from '../actions/actions';

const AdminList = ({ id, title, tag, createdAt }) => {
  return (
    <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-red-50 dark:hover:bg-gray-600'>
      <td className='px-6 py-4'>{title}</td>
      <td className='px-6 py-4'>{tag}</td>
      <td className='px-6 py-4'>
        {JSON.stringify(createdAt).substring(1, 11)}
      </td>
      <td className='px-6 py-4 text-right'>
        <FaRegTrashAlt
          style={{
            cursor: 'pointer',
            color: 'red',
            fontSize: '1.5rem',
          }}
          onClick={async () => deletePost(id)}
        />
      </td>
    </tr>
  );
};
export default AdminList;
