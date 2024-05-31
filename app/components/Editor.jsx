'use client';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import React, { useState } from 'react';

export default function Editor() {
  const [value, setValue] = useState('');

  return (
    <div>
      <ReactQuill theme='snow' value={value} onChange={setValue} />
      <p>{value}</p>
    </div>
  );
}
