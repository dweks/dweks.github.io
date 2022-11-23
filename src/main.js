import { Routes, Route, NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import * as Pages from "./pages/mod";
import "./styles/main.css";
import profileSmall from "./images/me.png";

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

// Contains my name and picture as link to default page
function Home(props) {
  return (
    <div id={props.id} className="bahn">
      <img
        src={profileSmall}
        alt="Small picture of Blake Stephens"
        width="45px"
      />
      <p role="portfolio owner">Blake Stephens</p>
    </div>
  );
}

// Header for content loaded from nav; updates through routes
function ContentHeader() {
  return (
    <header id="content-header" className="bahn">
      <div id="red-sep" role="aesthetic" />
      <Routes>
        <Route path="/about" element={"ABOUT"} />
        <Route path="/projects" element={"PROJECTS"} />
        <Route path="/experience" element={"EXPERIENCE"} />
        <Route path="/contact" element={"CONTACT"} />
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
          <Route exact path="/" element={<Pages.About />} />
          <Route path="/about" element={<Pages.About />} />
          <Route path="/projects" element={<Pages.Projects />} />
          <Route path="/experience" element={<Pages.Experience />} />
          <Route path="/contact" element={<Pages.Contact />} />
        </Routes>
      </main>
      <div id="shadow-bottom"></div>
    </>
  );
}

// Main navigation; vertical at higher screen widths, horizontal at lower
function Nav() {
  return (
    <nav id="nav" className="bahn">
    <Home id={"home-sm"} />
      <div id="red-sep-sm"></div>
      <ul role="nav-links">
        <li role="link">
          <NavLink
            to={"/about"}
            className={({ isActive }) => {
              return isActive ? "nav-link nav-link-act" : "nav-link";
            }}
          >
            About
          </NavLink>
          <Routes>
            <Route path="/about" element={<SubNav />} />
          </Routes>
        </li>

        <li role="link">
          <NavLink
            to={"/projects"}
            className={({ isActive }) => {
              return isActive ? "nav-link nav-link-act" : "nav-link";
            }}
          >
            Projects
          </NavLink>
          <Routes>
            <Route path="/projects" element={<SubNav />} />
          </Routes>
        </li>

        <li role="link">
          <NavLink
            to={"/experience"}
            className={({ isActive }) => {
              return isActive ? "nav-link nav-link-act" : "nav-link";
            }}
          >
            Experience
          </NavLink>
          <Routes>
            <Route path="/experience" element={<SubNav />} />
          </Routes>
        </li>

        <li role="link">
          <NavLink
            to={"/contact"}
            className={({ isActive }) => {
              return isActive ? "nav-link nav-link-act" : "nav-link";
            }}
          >
            Contact
          </NavLink>
          <Routes>
            <Route path="/contact" element={<SubNav />} />
          </Routes>
        </li>
      </ul>
    </nav>
  );
}

function SubNav() {
  return (
    <nav className="subnav">
      <HashLink to="/experience#1">Lab Facilitator</HashLink>
      <HashLink to="/experience#2">Frontend Developer</HashLink>
      <HashLink to="/experience#3">IT Help Desk Volunteer</HashLink>
    </nav>
  );
}

export default Main;
