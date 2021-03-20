import { Container } from "react-bootstrap";

import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HomeScreen from "../components/HomeScreen";

function Home() {
  return (
    <div>
      <Head>
        <title>ProShop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main className="py-3">
        <Container>
          <HomeScreen />
        </Container>
      </main>

      <Footer />
    </div>
  );
}
export default Home;
