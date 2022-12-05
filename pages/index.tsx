import Head from "next/head";
import Search from "../components/search";
import Layout from "../components/layout";
import { NextPageWithLayout } from "../lib/types";

const Home: NextPageWithLayout = ({}) => (
  <>
    <Head>
      <title>Search with Medusa</title>
      <meta name="description" content="Product search using Medusa.js" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Search />
  </>
);

Home.getLayout = (page) => <Layout>{page}</Layout>;

export default Home;
