import Head from "next/head";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Vlearning</title>
        <meta
          name="description"
          content="Vlearning the best CA video lecutres"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
