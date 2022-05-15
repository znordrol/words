import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

type LayoutProps = {
  children: React.ReactNode;
  trueFooter?: boolean;
  skipToContent?: boolean;
};

const Layout = ({
  children,
  trueFooter = false,
  skipToContent = true,
}: LayoutProps) => {
  return (
    <div className='flex min-h-screen flex-col justify-between'>
      <Header skipToContent={skipToContent} />
      {children}
      <Footer trueFooter={trueFooter} />
    </div>
  );
};

export default Layout;
