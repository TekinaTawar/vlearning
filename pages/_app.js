import "../styles/globals.css";
import Layout from "../components/Layout";

import { ApolloProvider } from "@apollo/client";
import client from "lib/apollo-client";

function MyApp({ Component, pageProps }) {
  if (Component.getLayout) {
    return (
      <ApolloProvider client={client}>
        {Component.getLayout(
          <Component {...pageProps} />)}
      </ApolloProvider>
    );
  }

  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
