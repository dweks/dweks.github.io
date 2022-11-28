import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Fragment } from "react";
import { motion } from "framer-motion";

import Experience from "./pages/experience";
import About from "./pages/about";
import Contact from "./pages/contact";
import Projects from "./pages/projects";
import Skills from "./pages/skills";

import logoSmall from "./images/logo.png";
import text from "./assets/text.json";

import "./styles/main.css";

// Preparing text objects for display on pages and throughout site
const aboutPageText = JSON.parse(JSON.stringify(text.pages.about));
const experiencePageText = JSON.parse(JSON.stringify(text.pages.experience));
const skillsPageText = JSON.parse(JSON.stringify(text.pages.skills));
const projectsPageText = JSON.parse(JSON.stringify(text.pages.projects));
const contactPageText = JSON.parse(JSON.stringify(text.pages.contact));
const pageTitles = JSON.parse(JSON.stringify(text.pages));

// Primary container for entire site; organized into two columns (rows on small screens)
function Main() {
  return (
    <div id="main">
      <div id="main-one">
        <Home id={"home-lg"} />
        <Nav />
      </div>
      <div id="main-two">
        <ContentHeader />
        <Content />
      </div>
    </div>
  );
}

// Contains my name and logo
function Home(props) {
  return (
    <div id={props.id}>
      <img
        src={logoSmall}
        alt="Thumbnail of Blake Stephens"
        width="45px"
        height="50px"
      />
      <div>
        <h2>{text.myname}</h2>
        <h3>{text.subtitle}</h3>
      </div>
    </div>
  );
}

// Header for content loaded from nav; updates through routes
function ContentHeader() {
  return (
    <header id="content-header">
      <div aria-hidden="true" id="sep" />
      <Routes>
        <Route exact path="/" element={<Navigate to="/about" />} />
        {Object.keys(pageTitles).map((entry) => {
          return (
            <Route
              key={entry}
              path={"/" + entry}
              element={
                <motion.h1
                  key={entry}
                  initial={{ opacity: 0, y: -40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {entry}
                </motion.h1>
              }
            />
          );
        })}
      </Routes>
    </header>
  );
}

// Main content; where site links are loaded
function Content() {
  return (
    <main id="content">
      <Routes>
        <Route exact path="/" element={<About text={aboutPageText} />} />
        <Route path={"/about"} element={<About text={aboutPageText} />} />
        <Route
          path={"/experience"}
          element={<Experience text={experiencePageText} />}
        />
        <Route path={"/skills"} element={<Skills text={skillsPageText} />} />
        <Route
          path={"/projects"}
          element={<Projects text={projectsPageText} />}
        />
        <Route path={"/contact"} element={<Contact text={contactPageText} />} />
      </Routes>
    </main>
  );
}

// Main navigation; vertical at higher screen widths, horizontal at lower
function Nav() {
  return (
    <nav aria-label="Main site navigation" id="nav">
      {Object.keys(pageTitles).map((page) => {
        if (page === "contact") {
          return (
            <NavLink
              key={page}
              to={"/" + page}
              className={({ isActive }) => {
                return isActive ? "nav-link nav-link-act" : "nav-link";
              }}
            >
              {page}
            </NavLink>
          );
        }

        return (
          <Fragment key={page + "nav"}>
            <NavLink
              key={page}
              to={"/" + page}
              className={({ isActive }) => {
                return isActive ? "nav-link nav-link-act" : "nav-link";
              }}
            >
              {page}
            </NavLink>
            <Routes>
              <Route
                key={page}
                path={"/" + page}
                element={<SubNav key={page} page={page} />}
              />
            </Routes>
          </Fragment>
        );
      })}

      <div aria-hidden="true" id="nav-end" />
    </nav>
  );
}

function getSubnav(text) {
  return Object.keys(text)
    .map((item) => {
      return text[item].header;
    })
    .filter((item) => {
      return item !== undefined;
    });
}

const subnavs = {
  about: getSubnav(aboutPageText),
  experience: getSubnav(experiencePageText),
  skills: getSubnav(skillsPageText),
  projects: getSubnav(projectsPageText),
};

function SubNav(props) {
  return (
    <motion.nav
      className={"subnav"}
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      transition={{ duration: 0.2 }}
      aria-label="subnavigation"
    >
      {subnavs[props.page].map((item) => {
        return (
          <HashLink
            key={item + " subnav link"}
            to={"/" + props.page + "#" + item}
            aria-label="subnavigation link"
          >
            {item}
          </HashLink>
        );
      })}
    </motion.nav>
  );
}

export default Main;
