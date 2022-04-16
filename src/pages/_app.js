import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>都道府県別の総人口推移グラフ</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
