import classes from "./latest-projects.module.css";
function LatestProjects() {
  return (
    <div className={classes.main}>
      <div className={classes.latestprojects}>
        <h1>Latest Projects</h1>
        <div className={classes.container} id="latest-projects">
          <h3>Lorem Ipsum Sit</h3>

          <div className={classes.carousel}>
            <div className={classes.item} id="item1"></div>
            <div className={classes.item} id="item2"></div>
            <div className={classes.item} id="item3"></div>
          </div>

          <div className={classes.indicator}>
            <a href="#item1"></a>
            <a href="#item2"></a>
            <a href="#item3"></a>
          </div>

        </div>
      </div>
    </div>
  );
}

export default LatestProjects;
