function Header() {
  return (
    <header>
      <nav className="nav">
        <img src="./React-icon.svg.png" className="nav-logo" />
        <ul className="nav-items">
          <li>Pricing </li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
function Footer() {
  return (
    <footer id="foot">
      <smal>2021 developement. All rights reserved.</smal>
    </footer>
  );
}

function MainComponent() {
  return (
    <div>
      <h1>fun facts about react</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on Github</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of entrprise apps, including mobile apps</li>
      </ul>
      <p>
        {" "}
        React Components is function that returns React element (object when use
        jsx syntax) UI
      </p>
    </div>
  );
}
function Page() {
  return (
    <div>
      <Header />
      <MainComponent />
      <Footer />
    </div>
  );
}
ReactDOM.render(<Page />, document.getElementById("root"));
