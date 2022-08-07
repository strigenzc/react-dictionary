import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiURL).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <div className="row">
          <div className="col-md-9">
            <input
              type="search"
              placeholder="Enter Word Here"
              autoFocus="true"
              onChange={handleKeywordChange}
              className="form-control"
            />
          </div>
          <div className="col-md-3">
            <input type="submit" className="button btn btn-outline-light" />
          </div>
        </div>
      </form>
      <div className="hint">
        Suggested words: Pixels, Arcade, Joystick, Co-op, ...
      </div>
      <Results results={results} />
    </div>
  );
}

//https://api.dictionaryapi.dev/api/v2/entries/en/hello
