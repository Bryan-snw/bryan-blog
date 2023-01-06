import { Fragment } from "react";
import { getAllPosts } from "../../lib/post-util";
import Project from "../../components/projects/projects";
import Head from "next/head";

function ProjectsPage(props) {
  return (
    <Fragment>
    <Head>
    <title>Projects</title>
    <meta name="description" content='This is all post page' />
    </Head>
      <Project posts={props.posts}/>
    </Fragment>
  );
}

export function getStaticProps(){
  const allPosts = getAllPosts();

  return {
    props:{
      posts: allPosts,
    }
  }
}

export default ProjectsPage;
