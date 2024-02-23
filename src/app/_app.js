import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Caio Bukvar - BKVR</title>
        <meta property="og:title" content="Caio Bukvar - BKVR" />
        <meta
          property="og:description"
          content="Software Developer Portfolio"
        />
        <meta
          property="og:image"
          content="/public/images/opengraph-image.png"
        />
        <meta property="og:url" content="https://www.bkvr.dev.br/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:site_name"
          content="Caio Bukvar - Developer Portfolio"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
