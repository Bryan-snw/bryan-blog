import { Fragment } from "react";
import { getAllPosts } from "../../lib/post-util";
import Project from "../../components/projects/projects";

function ProjectsPage(props) {
  return (
    <Fragment>
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
