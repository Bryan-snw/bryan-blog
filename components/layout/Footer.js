import classes from "./Footer.module.css";

function Footer() {
  let year = new Date().getFullYear();

  return (
    <div className={classes.main}>
      <div className={classes.footer}>
        <div className={classes.copyright}>
          <p>© Judiith Bryan Leonard Sie {year}</p>
        </div>
        <div className={classes.icon}>
          <ul>
            <li>
              <a
                href="https://github.com/Bryan-snw"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fa-brands fa-github"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/judith-bryan-leonard-sie-00690419a/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fa-brands fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="mailto:bryansie29@gmail.com">
                <i class="fa-solid fa-envelope"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Footer;
