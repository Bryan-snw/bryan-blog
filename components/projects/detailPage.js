import Image from "next/image";
import classes from "./detailPage.module.css";
import ReactMarkdown from "react-markdown";


function DetailPage(props) {
  const { title, slug, image, content, images } = props.post;

  const imagePath = `/images/posts/${slug}/${image}`

  console.log(images);

  return (
    <div className={classes.main}>
      <div className={classes.detailPage}>
        <div className={classes.pict}>
          <Image
            src={imagePath}
            alt={title}
            width={690}
            height={390}
          />
        </div>
        <h1 className={classes.title}>{title}</h1>
        <hr></hr>

        <article>

          <ReactMarkdown>{content}</ReactMarkdown>

          <div className={classes.imgContainer}>
            {images.map((img) => (
              <Image key={img} src={`/images/posts/${slug}/${img}`} alt={slug} width={495} height={300}/>
            ))}
            {/* <Image src="/images/posts/2.png" alt="" width={495} height={300} />
            <Image src="/images/posts/1.png" alt="" width={495} height={300} />
            <Image src="/images/posts/2.png" alt="" width={495} height={300} />
            <Image src="/images/posts/3.png" alt="" width={495} height={300} />
            <Image src="/images/posts/2.png" alt="" width={495} height={300} />
            <Image src="/images/posts/1.png" alt="" width={495} height={300} /> */}
          </div>

        </article>


        

      </div>
    </div>
  );
}

export default DetailPage;
