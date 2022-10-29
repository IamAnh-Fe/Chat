import type { ReactElement } from 'react';
import RootLayout from '../components/RootLayout';
// import NestedLayout from '../components/nested-layout';
import type { NextPageWithLayout } from './_app';

const Page: NextPageWithLayout = () => {
  return <p className="">hello world</p>;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};

export default Page;
