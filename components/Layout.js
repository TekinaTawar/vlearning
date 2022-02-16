import Head from "next/head";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import s from "../styles/Layout.module.scss";
import { FaWhatsapp } from "react-icons/fa";

const Layout = ({ children, signedIn, runSignOut }) => {
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
      <Header signedIn={signedIn} runSignOut={runSignOut} />
      {children}
      <div className={s.waButton}>
        <p>Get in touch</p>
        <FaWhatsapp size={32}/>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
