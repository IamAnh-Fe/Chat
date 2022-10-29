import type { ReactElement } from 'react';
import RootLayout from '../components/RootLayout';
import type { NextPageWithLayout } from './_app';
import { Chat } from '../components/Chat/Chat';
const Page: NextPageWithLayout = () => {
  return (
    <>
      <Chat />
    </>);
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};

export default Page;
