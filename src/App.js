import React from "react";
import "./App.css";
import Joke from "./components/Joke";
import { FacebookShareButton, FacebookIcon } from "react-share";

function App() {
  const shareUrl = "http://github.com";
  const title = "Share your joke";
  return (
    <div className="App">
      <header className="App-header">
        <Joke />
        <footer>
          <FacebookShareButton
            url={shareUrl}
            quote={title}
            className="Demo__some-network__share-button"
          >
            <FacebookIcon size={32} round />
          </FacebookShareButton>
        </footer>
      </header>
    </div>
  );
}

export default App;
