'use client';
import { ThreeCircles } from 'react-loader-spinner';

const Spinner = () => {
  return (
    <div className='flex justify-center my-4'>
      <ThreeCircles
        visible={true}
        height='60'
        width='60'
        color='#f4f4f5'
        ariaLabel='three-circles-loading'
        wrapperStyle={{}}
        wrapperClass=''
      />
    </div>
  );
};
export default Spinner;
