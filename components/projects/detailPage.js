import Image from "next/image";
import classes from "./detailPage.module.css";

function DetailPage() {
  return (
    <div className={classes.main}>
      <div className={classes.detailPage}>
        <div className={classes.pict}>
          <Image
            src="/images/posts/1.png"
            alt="Project"
            width={690}
            height={390}
          />
        </div>
        <h1 className={classes.title}>Project Room</h1>
        <hr></hr>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            odio metus, facilisis nec porttitor sit amet, elementum tincidunt
            tortor. Aliquam erat volutpat. In hac habitasse platea dictumst. In
            lorem magna, pulvinar scelerisque tortor quis, ullamcorper viverra
            arcu. Maecenas aliquet nunc nibh, in sagittis massa aliquet et.
            Donec nulla nulla, congue id accumsan ac, hendrerit et ligula.
            Phasellus interdum diam ac ex cursus, ac molestie nunc viverra.
            Suspendisse efficitur nulla vitae vestibulum auctor. Aliquam sodales
            consequat ex vel blandit.
          </p>
          <p>
            Suspendisse potenti. Morbi eget convallis felis. In at lacinia orci,
            eget tempus lorem. Quisque hendrerit urna sit amet auctor congue.
            Duis eleifend tempus ex, sed elementum ex convallis id. Cras in
            magna risus. Pellentesque sit amet enim quis mi sollicitudin mollis.
            Aliquam erat volutpat. Duis tristique condimentum dolor ut pharetra.
            Proin iaculis fringilla arcu. Cras malesuada magna eros, sit amet
            volutpat ligula malesuada mattis. Duis lacinia nulla ut metus
            eleifend mollis. Suspendisse tincidunt viverra consectetur. Nam eget
            arcu a sapien elementum sodales. Curabitur non dapibus neque. Sed
            tellus sem, consequat nec lorem sit amet, ornare egestas lorem.
          </p>
          <p>
            Nulla eu ornare ligula. Ut at ante ipsum. Proin in maximus neque, at
            bibendum mauris. Maecenas scelerisque ut nisl eu bibendum. Morbi
            aliquam facilisis ex, vel eleifend odio accumsan vel. Sed non
            maximus nulla, vitae posuere enim. Praesent eu massa dictum mauris
            hendrerit eleifend. Nunc placerat nec ante vel eleifend. Vestibulum
            imperdiet bibendum ante, ut imperdiet augue mollis sit amet.
          </p>
          <p>Project:</p>
          <div className={classes.imgContainer}>
            <Image src="/images/posts/2.png" alt="" width={495} height={300} />
            <Image src="/images/posts/1.png" alt="" width={495} height={300} />
            <Image src="/images/posts/2.png" alt="" width={495} height={300} />
            <Image src="/images/posts/3.png" alt="" width={495} height={300} />
            <Image src="/images/posts/2.png" alt="" width={495} height={300} />
            <Image src="/images/posts/1.png" alt="" width={495} height={300} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
