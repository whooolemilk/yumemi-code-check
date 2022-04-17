import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>都道府県別の総人口推移グラフ</title>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no'></meta>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
