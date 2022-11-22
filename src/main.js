import { Routes, Route, NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import About from "./pages/about";
import Contact from "./pages/contact";
import Experience from "./pages/experience";
import Projects from "./pages/projects";
import "./main.css";
import profileSmall from "./images/me.png";

function Main() {
  return (
    <div id="main">
      <div id="main-left-col">
        <div id="home" className="bahn">
          <img
            src={profileSmall}
            id="home-img"
            alt="Picture of Blake Stephens"
            height="50px"
          />
          <p role="portfolio owner">Blake Stephens</p>
        </div>
        <Nav />
      </div>
      <div id="main-right-col">
        <ContentHeader />
        <Content />
      </div>
    </div>
  );
}

function ContentHeader() {
  return (
    <header id="content-header" className="bahn">
      <div id="red-sep"></div>
      <Routes>
        <Route path="/about" element={<p>ABOUT</p>} />
        <Route path="/projects" element={<p>PROJECTS</p>} />
        <Route path="/experience" element={<p>EXPERIENCE</p>} />
        <Route path="/contact" element={<p>CONTACT</p>} />
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

function Nav() {
  return (
    <nav id="nav" className="bahn">
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
