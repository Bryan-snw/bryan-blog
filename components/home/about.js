import classes from "./about.module.css";
import Image from "next/image";
import Link from "next/link";

function About() {
  return (
    <div className={classes.main}>
      <div className={classes.about} id="about">
        <div className={classes.picture}>
          <div className={classes.round}>
            <Image
              src="/images/site/Foto.png"
              alt="My Face"
              width={280}
              height={480}
            />
          </div>
        </div>
        <div className={classes.desc}>
          <h1>Nice to meet you</h1>
          <p>
            i&apos;m Judith Bryan Leonard Sie, a fresh graduate in computer
            science. i have interest in software development especially at web
            development. I&apos;m looking forward to work in technology
            industry.
          </p>
          <p>
            This website is supposed to be a personal blog that contains all of
            my project that i&apos;ve been worked before. so in a simple way
            it&apos;s a portofolio blog. That being said, i will continue to
            post my project in here, so take a look. Click
            <span className={classes.link}>
              <Link href="/projects/detail/welcome"> here </Link>
            </span>
            if you want to now in detail.
          </p>
          <p>I&apos;m based in Indonesia.</p>
        </div>
      </div>
    </div>
  );
}

export default About;
