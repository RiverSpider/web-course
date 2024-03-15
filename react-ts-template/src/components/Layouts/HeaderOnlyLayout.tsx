import Header from './../Header/Header';

interface HeaderOnlyLayoutProps {
  children: React.ReactNode;
}

const HeaderOnlyLayout = ({ children }: HeaderOnlyLayoutProps) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default HeaderOnlyLayout;