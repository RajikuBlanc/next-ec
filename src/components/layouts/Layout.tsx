import Head from 'next/head';
import Script from 'next/script';
import { PropsWithChildren } from 'react';
import GlobalStyles from '../../styles/GlobalStyles';

// --------------- Function ---------------
export default function Layout({ children }: PropsWithChildren<any>) {
  return (
    <>
      <Head>
        <title>Next EC</title>
        <link rel='preconnect' href='https://app.snipcart.com' />
        <link rel='preconnect' href='https://cdn.snipcart.com' />
        <link rel='stylesheet' href='https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.css' />
        <link rel='shortcut icon' href='../public/favicon.ico' />
      </Head>
      <GlobalStyles />
      <main>{children}</main>
      <Script src='https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.js' />
      <div
        hidden
        id='snipcart'
        data-api-key='NGE0MjBhZDctOWI4YS00MGY3LThiZTEtNWRkZDVhZTA4MzhiNjM3NjcxMTQ1OTc3NTEzNTc5'
      ></div>
    </>
  );
}
