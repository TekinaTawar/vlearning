import "../styles/globals.css";
import Layout from "../components/Layout";
import { useState, useEffect } from "react";
import { parseCookies, destroyCookie } from "nookies";

import { ApolloProvider } from "@apollo/client";
import client from "../lib/apollo-client";

function MyApp({ Component, pageProps }) {
  const [signedIn, setSignedIn] = useState(false);
  useEffect(() => {
    const authCookie = parseCookies().AuthCookie;
    if (authCookie) setSignedIn(true);
  }, []);

  if (Component.getLayout) {
    return (
      <ApolloProvider client={client}>
        {Component.getLayout(<Component {...pageProps} />)}
      </ApolloProvider>
    );
  }

  return (
    <ApolloProvider client={client}>
      <Layout
        signedIn={signedIn}
        runSignOut={() => (destroyCookie(null, 'AuthCookie'), setSignedIn(false))}
      >
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
