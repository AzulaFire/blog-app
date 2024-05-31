import page404 from '@/app/assets/images/not-found.jpg';
import Image from 'next/image';

const NotFoundPage = () => {
  return (
    <div className='flex flex-col items-center'>
      <Image
        src={page404}
        alt='Page not found'
        width={800}
        height={800}
        priority={true}
      />
    </div>
  );
};
export default NotFoundPage;
