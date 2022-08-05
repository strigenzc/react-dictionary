import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiURL).then(handleResponse);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <div className="row">
          <div className="col-md-9">
            <input
              type="search"
              placeholder="Search for a word"
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
      <Results results={results} />
    </div>
  );
}

//https://api.dictionaryapi.dev/api/v2/entries/en/hello
