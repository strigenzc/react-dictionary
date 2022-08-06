import React from "react";
import "./Dictionary.css";

export default function Phonetic(props) {
  if (props.phonetic) {
    return (
      <div className="Phonetic">
        <a href={props.phonetic.audio} target="_blank" className="audioLink">
          Listen Here
        </a>
        <br />
        {props.phonetic.text}
      </div>
    );
  } else {
    return null;
  }
}
