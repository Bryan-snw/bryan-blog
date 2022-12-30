import classes from './introduction.module.css'

function Introduction(){
  return(
    <div className={classes.main}>
      <div className={classes.introduction}>
        <h1 className={classes.header}>Hello, I&apos;m Bryan,</h1>
        <h3 className={classes.desc}>I make website and want to become a Full-Stack Web Developer</h3>
        <div className={classes.nav}>
          <button className={classes.btn}>Contact</button>
          <a href="#latest-projects">
            
            <label className={classes.scroll}>or scroll down for more <i className="fa-solid fa-arrow-down"></i></label>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Introduction;