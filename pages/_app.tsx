import React from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import localFont from "next/font/local";
import "./global.css";

const myFont = localFont({ src: "../fonts/KEL.ttf", variable: "--kel",preload: true });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Head>
        <link rel="icon" href="/logo.ico" />
        <title>Aoly Blog</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <main
        className={myFont.variable}
      >
        <Component {...pageProps} />
      </main>
    </React.Fragment>
  );
}

export default MyApp;
