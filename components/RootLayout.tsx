import Head from 'next/head';
import { Navbar } from './Navbar/Navbar';
import { Sidebar } from './Sidebar/Sidebar';
import styled from 'styled-components';
const Layout = styled.div`
  display: flex;
`;
const SSidebar = styled.div`
  width: 33%;
`;
const SChildren = styled.div`
  width: 66%;
`;

interface  LayoutProps  {
  children: React.ReactNode;
};
const RootLayout = ({ children }: LayoutProps) => (
  <div>
    <Head>
      {/* <meta charset="UTF-8" /> */}
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>My Next App</title>
    </Head>
    <header>
      <Navbar />
    </header>
    <main>
      <Layout>
        <SSidebar>
          <Sidebar />
        </SSidebar>
        <SChildren>{children}</SChildren>
      </Layout>
    </main>
  </div>
);

export default RootLayout;
