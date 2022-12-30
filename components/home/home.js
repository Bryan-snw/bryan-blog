import { Fragment } from "react";
import About from "./about";
import Introduction from "./introduction";
import Languange from "./languange";
import LatestProjects from "./latest-projects";

function Home() {
  return (
    <Fragment>
      <Introduction />
      <LatestProjects />
      <Languange />
      <About />
    </Fragment>
  );
}
export default Home;
