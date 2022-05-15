/* eslint-disable @next/next/no-img-element */
import { animated, useSpring } from '@react-spring/web';
import type { NextPage } from 'next';
import { useTheme } from 'next-themes';

import ColorModeToggle from '@/components/ColorModeToggle';
import Seo from '@/components/Seo';

const Home: NextPage = () => {
  const { theme, setTheme } = useTheme();

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
        <section className=''>
          <div className='layout flex min-h-screen flex-col items-center justify-center text-center'>
            <animated.div
              style={props1}
              className='text-xl font-bold md:text-5xl'
            >
              Here lies my words for you {'<'}3
            </animated.div>
            <div className='sticky bottom-0 left-full flex h-20 w-20 items-center justify-center'>
              <ColorModeToggle value={theme} onChange={setTheme} />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
