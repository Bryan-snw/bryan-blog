import { Fragment } from "react";
import Head from "next/head";
import Introduction from "../components/home/introduction";
import LatestProjects from "../components/home/latest-projects";
import About from "../components/home/about";
import Languange from "../components/home/languange";
import { getFeaturedPosts } from "../lib/post-util";

function HomePage(props) {
  const featuredPosts = props.featuredPosts;

  return (
    <Fragment>
    <Head>
      <title>Bryan&apos;s Blog</title>
      <meta name="description" content="This my blog project" />
    </Head>
      <Introduction />
      <LatestProjects featuredPosts={featuredPosts} />
      <Languange />
      <About />
    </Fragment>
  );
}

export function getStaticProps(){
  const featuredPosts = getFeaturedPosts();
  // console.log(featuredPosts);
  return {
    props:{
      featuredPosts: featuredPosts,
    }
  }
}

export default HomePage;
