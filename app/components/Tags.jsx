'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Tags = () => {
  const tags = [
    'Art',
    'Gaming',
    'Japan',
    'Misc',
    'NextJS',
    'Photography',
    'Python',
    'Web',
  ];

  const pathName = usePathname();

  return (
    <div className='mt-8'>
      <ul>
        {tags.map((tag) => (
          <Link key={tag} href={`/tags/${tag}`}>
            <li
              className={`${
                pathName === `/tags/${tag}`
                  ? 'bg-white text-2xl text-[#ff0022] font-semibold mb-1 py-2 px-2'
                  : 'text-2xl font-semibold mb-1 py-2 px-2'
              }  hover:bg-zinc-200`}
            >
              {tag}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};
export default Tags;
