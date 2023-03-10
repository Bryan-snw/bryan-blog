import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import classes from "./card.module.css";
function Card(props) {
  const { slug, title, date, image, content } = props.post;

  const formattedDate = new Date(date).toLocaleString("en-US", {
    // weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const linkPath = `/projects/detail/${slug}`;
  const imagePath = `/images/posts/${slug}/${image}`;

  return (
    <Fragment>
      <Link href={linkPath}>
        <div className={classes.main}>
          <div className={classes.pict}>
            <Image src={imagePath} alt={title} width={350} height={210} />
          </div>
          <div className={classes.body}>
            <h4 className={classes.header}>{title}</h4>
            <p className={classes.date}>{formattedDate}</p>
            <p className={classes.desc}>{content.substring(0, 172) + "..."}</p>
          </div>
        </div>
      </Link>
    </Fragment>
  );
}

export default Card;
