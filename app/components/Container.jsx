import BlogCalendar from './BlogCalendar';
import Insta from './Insta';
import Socials from './Socials';
import Tags from './Tags';

const Container = ({ children }) => {
  return (
    <div className='bg-white min-h-screen flex flex-col sm:flex-row flex-wrap sm:flex-nowrap flex-grow'>
      <div
        id='LeftCol'
        className='flex lg:flex-col mx-auto w-fixed w-full flex-shrink flex-grow-0 pl-4 py-4 bg-zinc-100'
      >
        <Socials />
        <div className='hidden lg:block'>
          <Tags />
        </div>
      </div>
      <div id='mainCol' className='max-w-[1200px] flex-grow pt-1'>
        {children}
      </div>
      <div
        id='RightCol'
        className='hidden lg:flex lg:flex-col mx-auto w-fixed w-full flex-shrink flex-grow-0 border-l-2 px-2 bg-zinc-100'
      >
        <BlogCalendar />
        <Insta />
      </div>
    </div>
  );
};
export default Container;
