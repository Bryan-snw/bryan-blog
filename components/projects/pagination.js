import Link from "next/link";
import classes from "./pagination.module.css";

function Pagination() {
  return (
    <div className={classes.main}>
      <ul>
        <Link href="/">
          <div>
            <li>
              <i className="fa-solid fa-arrow-left"></i>
            </li>
          </div>
        </Link>
        <Link href="/">
          <div>
            <li>1</li>
          </div>
        </Link>
        <Link href="/">
          <div>
            <li>2</li>
          </div>
        </Link>
        <Link href="/">
          <div>
            <li>3</li>
          </div>
        </Link>
        <Link href="/">
          <div>
            <li>...</li>
          </div>
        </Link>
        <Link href="/">
          <div>
            <li>
              <i className="fa-solid fa-arrow-right"></i>
            </li>
          </div>
        </Link>
      </ul>
    </div>
  );
}

export default Pagination;
