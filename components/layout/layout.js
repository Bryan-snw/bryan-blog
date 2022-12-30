import { Fragment } from "react";
import Footer from "./Footer";
import Navigation from "./Navigation";

function Layout(props) {
  return (
    <Fragment>
      <Navigation />
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
}

export default Layout;
