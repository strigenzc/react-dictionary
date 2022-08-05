import React from "react";
import Synonyms from "./Synonyms";
import "./Dictionary.css"

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              <div className="ResultsHeader">Definition: </div> {definition.definition}
              <br /> <div className="ResultsHeader"> Example: </div>
              <em>{definition.example}</em>
              <br></br><div className="ResultsHeader">
            <Synonyms synonyms={definition.synonyms} /></div>
            </p>
          </div>
        );
      })}
    </div>
  );
}
