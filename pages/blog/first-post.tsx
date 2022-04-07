import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '../../components/layouts/layout';

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>Something else new</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        // onLoad={() =>
        //   console.log(`script loaded correctly, window.FB has been populated`)
        // }
      />
      <h1>First post </h1>
      <Link href="/">Click</Link>
      <b>{process.env.NEXT_PUBLIC_PORT}</b>
      <Image src="/images/test.webp" alt="" width={200} height={200} />
    </Layout>
  );
}
