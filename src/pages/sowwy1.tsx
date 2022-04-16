/* eslint-disable @next/next/no-img-element */
import { animated, useSpring } from '@react-spring/web';
import type { NextPage } from 'next';

import Seo from '@/components/Seo';

const Home: NextPage = () => {
  const words = [
    {
      first: 'Sorry ya',
      last: ' tadi ga sempat',
      spring1: useSpring({
        to: { opacity: 1 },
        delay: 2000,
        config: { duration: 1000 },
        from: { opacity: 0 },
      }),
      spring2: useSpring({
        to: { opacity: 1 },
        delay: 5000,
        config: { duration: 1000 },
        from: { opacity: 0 },
      }),
    },
    {
      first: 'Mungkin kamu udh nunggu...',
      last: '. Sezuzurnya ku tak tau mau nulis apa sih',
      spring1: useSpring({
        to: { opacity: 1 },
        delay: 8000,
        config: { duration: 1000 },
        from: { opacity: 0 },
      }),
      spring2: useSpring({
        to: { opacity: 1 },
        delay: 11000,
        config: { duration: 1000 },
        from: { opacity: 0 },
      }),
    },
    {
      first: 'Yaa selamat tidur dan mimpi indah.',
      last: ' Ntar sahur makan yg cukup dums',
      spring1: useSpring({
        to: { opacity: 1 },
        delay: 14000,
        config: { duration: 1000 },
        from: { opacity: 0 },
      }),
      spring2: useSpring({
        to: { opacity: 1 },
        delay: 17000,
        config: { duration: 1000 },
        from: { opacity: 0 },
      }),
    },
    {
      first: 'Jadi ini kompensasinya v:',
      last: '. Dan yang jelas aku mengkangen <3',
      spring1: useSpring({
        to: { opacity: 1 },
        delay: 20000,
        config: { duration: 1000 },
        from: { opacity: 0 },
      }),
      spring2: useSpring({
        to: { opacity: 1 },
        delay: 23000,
        config: { duration: 1000 },
        from: { opacity: 0 },
      }),
    },
    {
      first: 'Mengkangen dengan kamu...',
      last: ' yang manisnya gaada lawan v:',
      spring1: useSpring({
        to: { opacity: 1 },
        delay: 26000,
        config: { duration: 1000 },
        from: { opacity: 0 },
      }),
      spring2: useSpring({
        to: { opacity: 1 },
        delay: 29000,
        config: { duration: 1000 },
        from: { opacity: 0 },
      }),
    },
    {
      first: 'Bapak RW jual wagyu',
      last: '. I love you',
      spring1: useSpring({
        to: { opacity: 1 },
        delay: 32000,
        config: { duration: 1000 },
        from: { opacity: 0 },
      }),
      spring2: useSpring({
        to: { opacity: 1 },
        delay: 35000,
        config: { duration: 1000 },
        from: { opacity: 0 },
      }),
    },
  ];

  return (
    <>
      <Seo />
      <main>
        <section className='bg-black text-primary-50'>
          <div className='layout flex min-h-screen flex-col items-center justify-center gap-y-4 text-center'>
            {words.map(({ first, last, spring1, spring2 }) => (
              <animated.div
                style={spring1}
                className='text-xl font-bold md:text-3xl'
                key={first}
              >
                {first}
                <animated.span style={spring2}>{last}</animated.span>
              </animated.div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
