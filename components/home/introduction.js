import Link from "next/link";
import classes from "./introduction.module.css";

function Introduction() {
  return (
    <div className={classes.main}>
      <div className="componentContainer">
        <h1 className={classes.header}>Hello, I&apos;m Bryan,</h1>
        <h3 className={classes.desc}>
          I make website and want to become a Full-Stack Web Developer
        </h3>
        <div className={classes.nav}>
          <Link href="#footer" className={classes.btn}>
            Contact
          </Link>
          <Link href="#latest-projects">
            <label className={classes.scroll}>
              or scroll down for more <i className="fa-solid fa-arrow-down"></i>
            </label>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
