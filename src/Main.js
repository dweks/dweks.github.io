import "./Main.css";

function Main() {
  return (
    <div id="main">
      <LeftColumn />
      <RightColumn />
    </div>
  );
}

function LeftColumn() {
  return (
    <div id="main-left-col">
      <Home />
      <CurrentNav />
    </div>
  );
}

function RightColumn() {
  return (
    <div id="main-right-col">
      <MainNav />
      <CurrentView />
    </div>
  );
}

function Home() {
  return <div id="home-container">Blake Stephens</div>;
}

// Site navigation container
function MainNav() {
  return <div id="main-nav-container"></div>;
}

// Main content; where site links are loaded
function CurrentView() {
  return <div id="current-view-container"></div>;
}
// Left sidebar housing the current page title and page subsections
function CurrentNav() {
  return <div id="current-nav-container"></div>;
}

export default Main;
