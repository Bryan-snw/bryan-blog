import classes from "./projects.module.css";
import Card from "./card";
import Pagination from "./pagination";
import Link from "next/link";

function Projects() {
  return (
    <div className={classes.main}>
      <div className={classes.projects}>
        <h1>Projects</h1>
        <div className={classes.cardsConainer}>
          <Link href="/projects/1">
            <Card />
          </Link>
          <Link href="/projects/1">
            <Card />
          </Link>
          <Link href="/projects/1">
            <Card />
          </Link>
          <Link href="/projects/1">
            <Card />
          </Link>
          <Link href="/projects/1">
            <Card />
          </Link>
          <Link href="/projects/1">
            <Card />
          </Link>
          <Link href="/projects/1">
            <Card />
          </Link>
        </div>
        <div>
          <Pagination />
        </div>
      </div>
    </div>
  );
}

export default Projects;
