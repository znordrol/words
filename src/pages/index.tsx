import type { NextPage } from 'next';

import Accent from '@/components/Accent';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import WordCard, { Word } from '@/components/WordCard';
import clsxm from '@/lib/clsxm';

const words: Word[] = [
  {
    title: 'Miss u',
    content:
      'As the title says, this page shows you words about me missing you so much',
    path: '/miss',
    slug: 'miss',
    date: '22/3/2022',
  },
  {
    title: 'Sowwy v1.0',
    content:
      'If you navigate to this page, you will find words about me apologizing to you for a certain event',
    path: '/sowwy1',
    slug: 'sowwy1',
    date: '17/4/2022',
  },
];

const Home: NextPage = () => {
  return (
    <Layout>
      <Seo />
      <main>
        <section className={clsxm('flex flex-col justify-center')}>
          <article className='layout space-y-10 py-8'>
            <h1 className='text-3xl md:text-5xl 2xl:text-6xl'>
              <Accent>Here lies my words for you {'<'}3</Accent>
            </h1>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
              {words.map((word) => (
                <WordCard word={word} key={word.slug} />
              ))}
            </div>
          </article>
        </section>
      </main>
    </Layout>
  );
};

export default Home;
