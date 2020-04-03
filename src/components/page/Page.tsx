import React from "react";
import Header from "../header/Header";
import TechnologiesBar from "../technologiesBar/TechnologiesBar";
import Projects from "../projects/Projects";
/* import ContactButtons from "../contactButtons/ContactButtons"; */

export default class Page extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className={`page-grid`}>
          <Header />
          <TechnologiesBar />
          <Projects />
          <footer className={`footer`}>
            <div className={`container`}>
              <small>&copy; Copyright 2019, Brandon Desselle</small>
              {/* <div className={`footer__actions`}>
                <ContactButtons />
              </div> */}
            </div>
          </footer>
        </div>
      </React.Fragment>
    );
  }
}
