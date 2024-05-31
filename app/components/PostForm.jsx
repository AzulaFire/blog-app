'use client';
import { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import '../quill.snow.css';
import { createPost } from '../actions/actions';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';

const PostForm = () => {
  const router = useRouter();
  const [bodyValue, setBodyValue] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    body: '',
    tag: 'Art',
    image: '',
    credit: '',
  });

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      ['link', 'image'],
      ['clean'],
    ],
  };

  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
  ];

  const submitPost = async (formData) => {
    try {
      await createPost(formData);
      toast.success('Post created', {
        position: 'top-right',
      });
      setTimeout(() => {
        router.push('/posts');
      }, 3000);
    } catch {
      toast.error('Error: Post creation unsuccessful', {
        position: 'top-right',
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevFields) => ({
      ...prevFields,
      [name]: value,
    }));
  };

  useEffect(() => {
    setFormData((prevFields) => ({
      ...prevFields,
      body: bodyValue,
    }));
  }, [bodyValue]);

  return (
    <>
      <form
        action={() => submitPost(formData)}
        className='flex flex-col gap-6 my-10 max-w-[800px] mx-auto px-4'
      >
        <input
          type='text'
          name='title'
          placeholder='Title for new post'
          className='border rounded px-3 h-10'
          onChange={handleChange}
          required
        />
        <ReactQuill
          modules={modules}
          formats={formats}
          name='body'
          value={bodyValue}
          theme='snow'
          onChange={setBodyValue}
        />
        <select
          name='tag'
          className='border rounded px-3 h-10'
          value={formData.tag}
          onChange={handleChange}
        >
          <option value='Art'>Art</option>
          <option value='Gaming'>Gaming</option>
          <option value='Japan'>Japan</option>
          <option value='Misc'>Misc</option>
          <option value='NextJS'>NextJS</option>
          <option value='Photography'>Photography</option>
          <option value='Python'>Python</option>
          <option value='Web'>Web</option>
        </select>
        <input
          type='text'
          name='image'
          placeholder='Featured Image URL (optional)'
          className='border rounded px-3 h-10'
          onChange={handleChange}
        />
        <input
          type='text'
          name='credit'
          placeholder='Featured Image Source (optional)'
          className='border rounded px-3 h-10'
          onChange={handleChange}
        />
        <button className='h-10 bg-blue-600 hover:bg-blue-800 px-5 rounded text-white'>
          Submit
        </button>
        <ToastContainer />
      </form>
    </>
  );
};
export default PostForm;
