import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search(event) {
    event.preventDefault();

    let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiURL).then(handleDictionaryResponse);

    let pexelsApiKey =
      "563492ad6f9170000100000130f3b448ab1f42d3aa9f6508bc100b6e";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
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
      <Photos photos={photos} />
    </div>
  );
}

//https://api.dictionaryapi.dev/api/v2/entries/en/hello
