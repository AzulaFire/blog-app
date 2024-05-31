'use client';

import DOMPurify from 'dompurify';

const Purify = ({ body }) => {
  const rawHTML = body;
  return (
    <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(rawHTML) }} />
  );
};

export default Purify;
