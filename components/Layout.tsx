import React, {ReactNode} from 'react';
import Head from 'next/head';

import Footer from './Footer';
import MainNavbar from '@components/Navigation/MainNavbar';
import TestNav from '@components/TestComponents/TestNav';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({children, title = 'Hooksby'}: Props) => (
  // <div className="relative overflow-hidden">
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
        key="scale"
      />
      {/* <!-- this sets the color of url bar in Apple smatphones --> */}
      {/* <meta name="apple-mobile-web-app-status-bar" content="#0f172a" /> */}
      <meta name="apple-mobile-web-app-status-bar" content="#0f0f0f" />
    </Head>
    {/* <Navbar /> */}
    <MainNavbar />
    {/* <TestNav /> */}
    <main>{children}</main>
    <Footer />
    {/* </div> */}
  </>
);

export default Layout;
