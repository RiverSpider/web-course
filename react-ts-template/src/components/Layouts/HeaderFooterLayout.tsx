import Header from './../Header/Header';
import Footer from './../Footer/Footer';

interface HeaderFooterLayoutProps {
  children: React.ReactNode;
}

const HeaderFooterLayout = ({ children }: HeaderFooterLayoutProps) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default HeaderFooterLayout;
