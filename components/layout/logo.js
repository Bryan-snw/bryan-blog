import classes from "./logo.module.css";
import Link from "next/link";

function Logo() {
  return (
    <div className={`${classes.logo} ${classes.dark}`}>
      <Link href="/">Bryan&apos;s Blog</Link>
    </div>
  );
}

export default Logo;
