import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Fragment } from "react";
import Experience from "./pages/experience";
import About from "./pages/about";
import Contact from "./pages/contact";
import Projects from "./pages/projects";
import Skills from "./pages/skills";
import "./styles/main.css";
import logoSmall from "./images/logo.png";
import { motion } from "framer-motion";
import text from "./assets/text.json";

const aboutPageText = JSON.parse(JSON.stringify(text.pages.about));
const experiencePageText = JSON.parse(JSON.stringify(text.pages.experience));
const skillsPageText = JSON.parse(JSON.stringify(text.pages.skills));
const projectsPageText = JSON.parse(JSON.stringify(text.pages.projects));
const contactPageText = JSON.parse(JSON.stringify(text.pages.contact));
const pageTitles = JSON.parse(JSON.stringify(text.pages));

// Primary container for entire site; organized into two columns
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

// Contains my name and picture, both link to default page
function Home(props) {
  return (
    <div id={props.id}>
      <img src={logoSmall} alt="Thumbnail of Blake Stephens" width="45px" />
      <h3 role="portfolio owner">{text.myname}</h3>
      <h6>{text.subtitle}</h6>
    </div>
  );
}

// Header for content loaded from nav; updates through routes
function ContentHeader() {
  return (
    <header id="content-header" className="bahn">
      <div id="sep" role="aesthetic" />
      <Routes>
        <Route exact path="/" element={<Navigate to="/about" />} />
        {Object.keys(pageTitles).map((entry) => {
          return (
            <Route
              key={entry}
              path={"/" + entry}
              element={
                <motion.h2
                  key={entry}
                  initial={{ opacity: 0, y: -40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {entry}
                </motion.h2>
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
    <>
      {/* <div id="shadow-top"></div> */}
      <main id="content">
        <Routes>
          <Route exact path="/" element={<About text={aboutPageText} />} />
          <Route path={"/about"} element={<About text={aboutPageText} />} />
          <Route
            path={"/experience"}
            element={<Experience text={experiencePageText} />}
          />
          <Route
            path={"/skills"}
            element={<Skills text={skillsPageText} />}
          />
          <Route
            path={"/projects"}
            element={<Projects text={projectsPageText} />}
          />
          <Route
            path={"/contact"}
            element={<Contact text={contactPageText} />}
          />
        </Routes>
      </main>
      {/* <div id="shadow-bottom"></div> */}
    </>
  );
}

// Main navigation; vertical at higher screen widths, horizontal at lower
function Nav() {
  return (
    <nav id="nav">
      <Home id={"home-sm"} />
      <div id="sep-sm" role="aesthetics" />
      {Object.keys(pageTitles).map((page) => {
        return (
          <Fragment key={page + "nav"}>
            <NavLink
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

      <div id="nav-end" role="aesthetics" />
    </nav>
  );
}

function getSubnav(text) {
  return Object.keys(text).map((item) => {
      return text[item].title;
  }).filter((item) => {
    return item !== undefined;
  });
}

const subnavs = {
  about: getSubnav(aboutPageText),
  experience: getSubnav(experiencePageText),
  skills: getSubnav(skillsPageText),
  projects: getSubnav(projectsPageText),
  contact: ["contacty"],
};

function SubNav(props) {
  return (
    <motion.nav
      className={"subnav"}
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      transition={{ duration: 0.2 }}
    >
      {subnavs[props.page].map((item) => {
        return (
          <HashLink
            key={item + " subnav link"}
            to={"/" + props.page + "#" + item}
          >
            {item}
          </HashLink>
        );
      })}
    </motion.nav>
  );
}

export default Main;
