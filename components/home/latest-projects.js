import classes from "./latest-projects.module.css";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

function LatestProjects(props) {
  const featuredPosts = props.featuredPosts;
  console.log(featuredPosts[0].image);

  const [ProjectTitle, setProjectTitle] = useState(featuredPosts[0].title);

  function changeColor(selectedId) {
    const ids = ["1", "2", "3"];
    ids.splice(selectedId - 1, 1);

    // Change the Selected Id
    document.getElementById(`${selectedId}`).style.backgroundColor = "#FEFCF3";
    // Change the unselected Id
    ids.map(
      (id) =>
        (document.getElementById(`${id}`).style.backgroundColor = "#FEFCF399")
    );
  }

  function clickHandler(item) {
    if (item === "item1") {
      setProjectTitle(featuredPosts[0].title);
      changeColor(1);
    } else if (item === "item2") {
      setProjectTitle(featuredPosts[1].title);
      changeColor(2);
    } else if (item === "item3") {
      setProjectTitle(featuredPosts[2].title);
      changeColor(3);
    }
  }

  return (
    <div className={classes.main}>
      <div className="componentContainer">
        <h1 className="headerTitle">Latest Projects</h1>
        <div className={classes.container} id="latest-projects">
          <h3 className={classes.title}>{ProjectTitle}</h3>

          <div className={classes.carousel}>
            <div className={classes.item} id="item1">
              <Link href={`/projects/detail/${featuredPosts[0].slug}`}>
                <Image
                  src={`/images/posts/${featuredPosts[0].slug}/${featuredPosts[0].image}`}
                  alt={featuredPosts[0].slug}
                  width={920}
                  height={500}
                />
              </Link>
            </div>
            <div className={classes.item} id="item2">
              <Link href={`/projects/detail/${featuredPosts[1].slug}`}>
                <Image
                  src={`/images/posts/${featuredPosts[1].slug}/${featuredPosts[1].image}`}
                  alt={featuredPosts[1].slug}
                  width={920}
                  height={500}
                />
              </Link>
            </div>
            <div className={classes.item} id="item3">
              <Link href={`/projects/detail/${featuredPosts[2].slug}`}>
                <Image
                  src={`/images/posts/${featuredPosts[2].slug}/${featuredPosts[2].image}`}
                  alt={featuredPosts[2].slug}
                  width={920}
                  height={500}
                />
              </Link>
            </div>
          </div>

          <div className={classes.indicator}>
            <a id="1" href="#item1" onClick={() => clickHandler("item1")}></a>
            <a id="2" href="#item2" onClick={() => clickHandler("item2")}></a>
            <a id="3" href="#item3" onClick={() => clickHandler("item3")}></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LatestProjects;
