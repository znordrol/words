import Link from 'next/link';
import { useInView } from 'react-intersection-observer';

import clsxm from '@/lib/clsxm';

export type Word = {
  title?: string;
  content: string;
  path: string;
  slug: string;
  date?: string;
};

export type WordCardProp = {
  word: Word;
};

const WordCard = ({ word }: WordCardProp) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '-10% 0px',
  });

  return (
    <Link href={word.path}>
      <a>
        <div
          ref={ref}
          className={clsxm(
            'relative transform overflow-hidden rounded-lg bg-gray-300 transition duration-200 hover:-translate-y-1 hover:shadow-2xl dark:bg-gray-800',
            'opacity-0 transition duration-500 ease-out motion-reduce:opacity-100',
            inView && 'opacity-100'
          )}
        >
          <div className='space-y-4 px-4 pt-4 pb-16'>
            <p className='text-xl font-semibold'>{word.title}</p>
            <p className=''>{word.content}</p>
            <div className='absolute bottom-0 left-0 flex w-full items-center px-4 pb-4'>
              <div className='flex-1'></div>
              Created: {word.date}
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default WordCard;
