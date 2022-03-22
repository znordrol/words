/* eslint-disable @next/next/no-img-element */
import { animated, useSpring } from '@react-spring/web';
import type { NextPage } from 'next';

import Seo from '@/components/Seo';

const Home: NextPage = () => {
  const props1 = useSpring({
    to: { opacity: 1 },
    delay: 2000,
    config: { duration: 1000 },
    from: { opacity: 0 },
  });

  return (
    <>
      <Seo />
      <main>
        <section className='bg-black text-primary-50'>
          <div className='layout flex min-h-screen flex-col items-center justify-center text-center'>
            <animated.div
              style={props1}
              className='text-xl font-bold md:text-5xl'
            >
              Here lies my words for you {'<'}3
            </animated.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
