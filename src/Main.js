import { Routes, Route, NavLink } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";

import "./Main.css";
import profileSmall from "./images/me.png";

function Main() {
  return (
    <div id="main">
      <div id="main-left-col">
        <div id="home" className="bahn">
          <img
            src={profileSmall}
            id="home-self"
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
    <main id="content" className="round-corner-lg">
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
  );
}

function Nav() {
  return (
    <nav id="nav" className="round-corner-lg bahn">
      <NavLink to={"/about"} className="nav-link">
        {/* Should do something but doesn't; checkout youtube video*/}
        {({ isActive }) => {
          return isActive ? "> " : "";
        }}
        About
      </NavLink>

      <NavLink to={"/projects"} className="nav-link">
        Projects
      </NavLink>

      <NavLink to={"/experience"} className="nav-link">
        Experience
      </NavLink>

      <NavLink to={"/contact"} className="nav-link">
        Contact
      </NavLink>
    </nav>
  );
}

export default Main;
