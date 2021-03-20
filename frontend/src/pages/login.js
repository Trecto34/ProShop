import { Container } from "react-bootstrap";

import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";

const login = () => {
  return (
    <div>
      <Head>
        <title>ProShop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main className="py-3">
        <Container></Container>
      </main>

      <Footer />
    </div>
  );
};

export default login;
