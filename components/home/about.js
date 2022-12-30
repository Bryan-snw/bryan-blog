import classes from "./about.module.css";
import Image from "next/image";

function About() {
  return (
    <div className={classes.main} >
      <div className={classes.about} id="about">
        <div className={classes.desc}>
          <h1>Nice to meet you</h1>
          <p>
            i&apos;m Judith Bryan Leonard Sie, a fresh graduate in computer
            science. i have interest in software development especially at web
            development. I&apos;m looking forward to work in technology
            industry.
          </p>
          <p>
            This blog is supposed to be a personal blog that contains all of my
            project that i&apos;ve been worked before. Lorem ipsum sit dolor et,
            lorem ipsum sit dolor.
          </p>
          <p>I&apos;m based in Indonesia.</p>
        </div>
        <div className={classes.picture}>
          <Image
            src="/images/site/Foto.png"
            alt="My Face"
            width={280}
            height={480}
          />
        </div>
      </div>
    </div>
  );
}

export default About;
