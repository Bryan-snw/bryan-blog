import classes from "./projects.module.css";
import Card from "./card";
import Pagination from "./pagination";

function Projects(props) {
  const { posts, jumlahDataPerHalaman, jumlahHalaman, halamanAktif, awalData } =
    props;

  var LimitedPosts = [];
  let i = 0;
  for (let index = awalData; index <= posts.length; index++) {
    if (i == jumlahDataPerHalaman || index >= posts.length) {
      break;
    } else {
      i++;
      LimitedPosts.push(posts[index]);
    }
  }

  return (
    <div className={classes.main}>
      <div className="componentContainer">
        <h1 className="headerTitle">Projects</h1>
        <div className={classes.cardsConainer}>
          {LimitedPosts.map((post) => (
            <div className={classes.gridItem} key={post.slug}>
              <Card post={post} />
            </div>
          ))}
        </div>
        <div>
          <Pagination
            halamanAktif={halamanAktif}
            jumlahHalaman={jumlahHalaman}
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
