import { ReactNode } from 'react';
import Layout from '../components/RootLayout';
const About = () => {
  return <div>about</div>;
};
About.getLayout = (page: ReactNode) => <Layout>{page}</Layout>;
export default About;
