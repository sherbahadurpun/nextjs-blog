import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/header";

export default function Format({children}) {
  return (
    <>
      <Head>
        <title>Nextjs Blog</title>
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
