'use client';
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import LightGallery from 'lightgallery/react';
import lgZoom from 'lightgallery/plugins/zoom';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

const Gallery = ({ pic }) => {
  return (
    <LightGallery
      licenseKey={process.env.Light_Gallery_SECRET}
      mode='lg-fade'
      thumbHeight='50px'
      thumbWidth='20px'
      speed={500}
      plugins={[lgZoom, lgThumbnail]}
    >
      <a
        data-lg-size='1000-488'
        className='gallery-item cursor-pointer'
        data-src={pic}
      >
        <img
          className='img-responsive h-auto max-w-full shadow-md hover:scale-110 transition duration-400 ease-in-out border-b-4 border-l-4 border-[#ff0022]'
          src={pic}
        />
      </a>
    </LightGallery>
  );
};
export default Gallery;
