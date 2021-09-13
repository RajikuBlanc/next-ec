import Head from 'next/head';
import { PropsWithChildren } from 'react';
import GlobalStyles from '../../styles/GlobalStyles';
// --------------- Function ---------------
export default function Layout({ children }: PropsWithChildren<any>) {
  return (
    <>
      <Head>
        <title>Next EC</title>
      </Head>
      <GlobalStyles />
      <main>{children}</main>
    </>
  );
}
