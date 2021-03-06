import { SWRConfig } from 'swr';
import '../styles/globals.css';
import React from 'react';

const fetcher = (...args) => fetch(...args).then((res) => res.json());
function MyApp({ Component, pageProps }) {
  return (
    <>
      <SWRConfig value={{ fetcher }}>
        <Component {...pageProps}/>
      </SWRConfig>
    </>
  );
}

export default MyApp;
