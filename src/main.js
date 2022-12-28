import {
  Routes,
  Route,
  NavLink,
  Navigate,
  useLocation,
} from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Fragment } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Experience from "./pages/experience";
import About from "./pages/about";
// import Contact from "./pages/contact";
import Work from "./pages/work";
import Skills from "./pages/skills";

// import logoSmall from "./images/logo.png";
import text from "./assets/text.json";

import "./styles/main.css";

// Preparing text objects for display on pages and throughout site
const aboutPageText = JSON.parse(JSON.stringify(text.pages.about));
const experiencePageText = JSON.parse(JSON.stringify(text.pages.experience));
const skillsPageText = JSON.parse(JSON.stringify(text.pages.skills));
const workPageText = JSON.parse(JSON.stringify(text.pages.work));
// const contactPageText = JSON.parse(JSON.stringify(text.pages.contact));
const pageTitles = JSON.parse(JSON.stringify(text.pages));

// Primary container for entire site; organized into two columns (rows on small screens)
function Main() {
  return (
    <>
      <div id="bg-decor" />
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
    </>
  );
}

// Contains my name and logo
function Home(props) {
  return (
    <div id={props.id}>
      <NavLink key={text.homepage} to={"/" + text.homepage}>
        <h1>{text.myname}</h1>
        <h2>{text.subtitle}</h2>
      </NavLink>
    </div>
  );
}

// Header for content loaded from nav; updates through routes
function ContentHeader() {
  return (
    <header id="content-header">
      <div aria-hidden="true" id="sep" />
      <Routes>
        <Route index element={<Navigate to="/about" />} />
        {Object.keys(pageTitles).map((entry) => {
          return (
            <Route
              key={entry}
              path={"/" + entry}
              element={
                <motion.h1
                  key={entry}
                  initial={{ width: 0, overflow: "hidden" }}
                  animate={{ width: "auto" }}
                  transition={{ ease: "easeOut", duration: 0.3 }}
                  exit={{ width: 0, transition: { duration: 1 } }}
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
  const location = useLocation();
  return (
    <main id="content">
      {/* <div id="shad-top" /> */}
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route exact path="/" element={<About text={aboutPageText} />} />
          <Route path={"/about"} element={<About text={aboutPageText} />} />
          <Route
            path={"/experience"}
            element={<Experience text={experiencePageText} />}
          />
          <Route path={"/skills"} element={<Skills text={skillsPageText} />} />
          <Route path={"/work"} element={<Work text={workPageText} />} />
          {/* <Route
            path={"/contact"}
            element={<Contact text={contactPageText} />}
          /> */}
        </Routes>
      </AnimatePresence>
      {/* <div id="shad-bot" /> */}
    </main>
  );
}

// Main navigation; vertical at higher screen widths, horizontal at lower
function Nav() {
  const location = useLocation();
  return (
    <>
      <nav aria-label="Main site navigation" id="nav">
        {Object.keys(pageTitles).map((page) => {
          // if (page === "contact") {
          //   return (
          //     <NavLink
          //       key={page}
          //       to={"/" + page}
          //       className={({ isActive }) => {
          //         return isActive ? "nav-link nav-link-act" : "nav-link";
          //       }}
          //     >
          //       {page}
          //     </NavLink>
          //   );
          // }

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
              <AnimatePresence>
                <Routes location={location} key={location.pathname}>
                  <Route
                    key={page}
                    path={"/" + page}
                    element={<SubNav key={page} page={page} />}
                  />
                </Routes>
              </AnimatePresence>
            </Fragment>
          );
        })}
      </nav>
      <div aria-hidden="true" id="nav-end" />
    </>
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
  work: getSubnav(workPageText),
};

function SubNav(props) {
  return (
    <motion.nav
      key={props.page}
      className="subnav"
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto", overflow: "hidden" }}
      transition={{ ease: "easeOut", duration: 0.2 }}
      exit={{ opacity: 0, height: 0 }}
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
