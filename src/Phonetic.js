import React from "react";
import "./Dictionary.css";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <a
        href={props.phonetic.audio}
        target="_blank"
        className="audioLink"
        rel="noreferrer"
      >
        Listen Here
      </a>
      <br />
      <span className="text">{props.phonetic.text}</span>
    </div>
  );
}
