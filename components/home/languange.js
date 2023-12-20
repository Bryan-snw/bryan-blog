import classes from "./languange.module.css";
import Image from "next/image";
function Languange() {
   return (
      <div className={classes.main}>
         <div className="componentContainer">
            <h1 className="headerTitle">Programming Language</h1>
            <div className={classes.marqIcon}>
               <div className={classes.wrapper}>
                  <section className={classes.cards}>
                     <div className={classes.cardscontent}>
                        <i className="fa-brands fa-html5"></i>
                     </div>
                     <div className={classes.cardscontent}>
                        <i className="fa-brands fa-css3"></i>
                     </div>
                     <div className={classes.cardscontent}>
                        <i className="fa-brands fa-js"></i>
                     </div>
                     <div className={classes.cardscontent}>
                        <i class="fa-brands fa-python"></i>
                     </div>
                     <div className={classes.cardscontent}>
                        <i className="fa-brands fa-php"></i>
                     </div>
                     <div className={classes.cardscontent}>
                        <i className="fa-brands fa-node"></i>
                     </div>
                     <div className={classes.cardscontent}>
                        <i className="fa-brands fa-laravel"></i>
                     </div>
                     <div className={classes.cardscontent}>
                        <i className="fa-brands fa-react"></i>
                     </div>
                     <div className={classes.cardscontent}>
                        <i>
                           <Image
                              src="/images/site/nextjs-icon.png"
                              alt="NextJs"
                              width={322}
                              height={77}
                           />
                        </i>
                     </div>
                     <div className={classes.cardscontent}>
                        <i>
                           <Image
                              src="/images/site/mongodb.png"
                              alt="MongoDB"
                              width={250}
                              height={77}
                           />
                        </i>
                     </div>
                     <div className={classes.cardscontent}>
                        <i>
                           <Image
                              src="/images/site/mysql.png"
                              alt="MongoDB"
                              width={150}
                              height={77}
                           />
                        </i>
                     </div>
                  </section>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Languange;
