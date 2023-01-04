import classes from "./projects.module.css";
import Card from "./card";
import Pagination from "./pagination";


function Projects(props) {
  const { posts } = props;

  return (
    <div className={classes.main}>
      <div className={classes.projects}>
        <h1>Projects</h1>
        <div className={classes.cardsConainer}>
          {posts.map((post) => (
            <Card key={post.slug} post={post} />
          ))}
        </div>
        <div>
          <Pagination />
        </div>
      </div>
    </div>
  );
}

export default Projects;
