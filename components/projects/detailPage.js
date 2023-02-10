import Image from "next/image";
import classes from "./detailPage.module.css";
import ReactMarkdown from "react-markdown";

function DetailPage(props) {
  const { title, slug, image, content, images } = props.post;

  const imagePath = `/images/posts/${slug}/${image}`;

  return (
    <div className={classes.main}>
      <div className="componentContainer">
        <div className={classes.pict}>
          <Image src={imagePath} alt={title} width={1000} height={600} />
        </div>
        <h1 className={classes.title}>{title}</h1>
        <hr></hr>

        <article>
          <ReactMarkdown>{content}</ReactMarkdown>

          <div className={classes.imgContainer}>
            {images.map((img) => (
              <Image
                key={img}
                src={`/images/posts/${slug}/${img}`}
                alt={slug}
                // layout='fill'
                width={495}
                height={250}
              />
            ))}
          </div>
        </article>
      </div>
    </div>
  );
}

export default DetailPage;
