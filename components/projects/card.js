import Image from "next/image";
import { Fragment } from "react";
import classes from "./card.module.css";
function Card(props) {
  return (
    <Fragment>
      <div className={classes.main}>
        <Image src="/images/posts/1.png" alt="" width={350} height={210} />
        <div className={classes.body}>
          <h4 className={classes.header}>Project Room</h4>
          <p className={classes.date}>8 Desember 2022</p>
          <p className={classes.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            rutrum dolor eget sem consequat, a porta nisl eleifend. Donec non
            pulvinar metus...
          </p>
        </div>
      </div>
    </Fragment>
  );
}

export default Card;
