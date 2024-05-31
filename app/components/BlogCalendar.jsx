'use client';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const BlogCalendar = () => {
  const [currentDay, setCurrentDay] = useState(new Date());

  const onChange = (nextValue) => {
    setCurrentDay(nextValue);
  };

  return (
    <div className='mt-8 mx-auto'>
      <Calendar className='w-[324px]' onChange={onChange} value={currentDay} />
    </div>
  );
};
export default BlogCalendar;
