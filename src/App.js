import "./App.css";
import Dictionary from "./Dictionary";
import "./Dictionary.css";

function App() {
  return (
    <div container="webpage">
      <div className="App">
        <div className="container">
          <header className="DictionaryHeader">Search for a Word</header>
          <br></br>
          <main>
            <Dictionary />
          </main>
          <footer>
            <small>
              {" "}
              This project open sourced on{" "}
              <a
                href="https://github.com/strigenzc/react-dictionary"
                target="_blank"
                rel="nooperner noreferrer"
              >
                {" "}
                Github
              </a>{" "}
              <br></br>
              Portfolio found{" "}
              <a
                href="https://strigenz-portfolio.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>
            </small>
          </footer>
        </div>
      </div>
      <img src="pacman.jpg" alt="pacman photo" />
    </div>
  );
}

export default App;
