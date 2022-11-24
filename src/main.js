import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Experience from "./pages/experience";
import About from "./pages/about";
import Contact from "./pages/contact";
import Projects from "./pages/projects";
import "./styles/main.css";
import profileSmall from "./images/me.png";
import { AnimatePresence, motion } from "framer-motion";

// Primary container for entire site; organized into two columns
function Main() {
  return (
    <div id="main">
      <div id="main-left-col">
        <Home id={"home-lg"} />
        <Nav />
      </div>
      <div id="main-right-col">
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
      <img src={profileSmall} alt="Thumbnail of Blake Stephens" width="45px" />
      <p role="portfolio owner">Blake Stephens</p>
    </div>
  );
}

// Header for content loaded from nav; updates through routes
function ContentHeader() {
  const yOffset = -40;
  const dur = 0.3;

  return (
    <header id="content-header" className="bahn">
      <div id="sep" role="aesthetic" />
      <Routes>
        <Route exact path="/" element={<Navigate to="/about" />} />
        <Route
          path="/about"
          element={
            <motion.p
              key={"about"}
              initial={{ opacity: 0, y: yOffset }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: dur }}
            >
              ABOUT
            </motion.p>
          }
        />

        <Route
          path="/projects"
          element={
            <motion.p
              key={"projects"}
              initial={{ opacity: 0, y: yOffset }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: dur }}
            >
              PROJECTS
            </motion.p>
          }
        />
        <Route
          path="/experience"
          element={
            <motion.p
              key={"experience"}
              initial={{ opacity: 0, y: yOffset }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: dur }}
            >
              EXPERIENCE
            </motion.p>
          }
        />
        <Route
          path="/contact"
          element={
            <motion.p
              key={"contact"}
              initial={{ opacity: 0, y: yOffset }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: dur }}
            >
              CONTACT
            </motion.p>
          }
        />
      </Routes>
    </header>
  );
}

// Main content; where site links are loaded
function Content() {
  return (
    <>
      <div id="shadow-top"></div>
      <main id="content">
        <Routes>
          <Route exact path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <div id="shadow-bottom"></div>
    </>
  );
}

// Main navigation; vertical at higher screen widths, horizontal at lower
function Nav() {
  return (
    <>
    <nav id="nav">
      <Home id={"home-sm"} />
      <div id="sep-sm" role="aesthetics" />
      <NavLink
        to={"/about"}
        className={({ isActive }) => {
          return isActive ? "nav-link nav-link-act" : "nav-link";
        }}
      >
        {"About"}
      </NavLink>
      <Routes>
        <Route path="/about" element={<SubNav key={"about"} />} />
      </Routes>
      <NavLink
        to={"/projects"}
        className={({ isActive }) => {
          return isActive ? "nav-link nav-link-act" : "nav-link";
        }}
      >
        {"Projects"}
      </NavLink>
      <Routes>
        <Route path="/projects" element={<SubNav key={"projects"} />} />
      </Routes>
      <NavLink
        to={"/experience"}
        className={({ isActive }) => {
          return isActive ? "nav-link nav-link-act" : "nav-link";
        }}
      >
        {"Experience"}
      </NavLink>
      <Routes>
        <Route path="/experience" element={<SubNav key={"experience"} />} />
      </Routes>

      <NavLink
        to={"/contact"}
        className={({ isActive }) => {
          return isActive ? "nav-link nav-link-act" : "nav-link";
        }}
      >
        {"Contact"}
      </NavLink>
      <Routes>
        <Route path="/contact" element={<SubNav key={"contact"} />} />
      </Routes>
    </nav>
    <div className="nav-end" role="aesthetics" />
    </>
  );
}

function SubNav(props) {
  return (
    <AnimatePresence>
      <motion.nav
        key={props.key}
        className={"subnav"}
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "auto" }}
        transition={{ duration: 0.2 }}
        exit={{ opacity: 0, height: 0 }}
      >
        <HashLink to="/experience#1">Lab Facilitator</HashLink>
        <HashLink to="/experience#2">Frontend Developer</HashLink>
        <HashLink to="/experience#3">IT Help Desk Volunteer</HashLink>
      </motion.nav>
    </AnimatePresence>
  );
}

export default Main;
