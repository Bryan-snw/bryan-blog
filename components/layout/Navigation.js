import classes from "./Navigation.module.css";
import Link from "next/link";
import Logo from "./logo";
import { useState } from "react";

function Navigation() {
  const [active, setActive] = useState("");
  const [status, setStatus] = useState(false);

  function clickHandler() {
    if (!status) {
      setActive(classes.active);
      setStatus(true);
    } else {
      setActive("");
      setStatus(false);
    }
  }

  return (
    <header className={classes.header}>
      <Logo />
      <nav id="nav" className={`${classes.nav} ${active}`}>
        <ul>
          <Link href="/projects/1" onClick={clickHandler}>
            <li>Projects</li>
          </Link>
          <Link href="#about" onClick={clickHandler}>
            <li>About</li>
          </Link>
          <Link href="#footer" onClick={clickHandler}>
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
      <nav className={classes.navIcon}>
        <span className={classes.icon} onClick={clickHandler}>
          <i className="fa-solid fa-bars"></i>
        </span>
      </nav>
    </header>
  );
}

export default Navigation;
