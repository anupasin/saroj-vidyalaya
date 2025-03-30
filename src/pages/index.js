import Head from 'next/head';
import Layout from '../components/Layout';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>SarojVidyalaya | Playful Learning</title>
        <meta name="description" content="Education inspired by nature" />
      </Head>
      <Hero />
    </Layout>
  );
}