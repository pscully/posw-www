import React from "react";
import CardLink from "./cardLink";

const Card = props => {
  if (props.style === 'quote') {
    return (
      <div className="rounded overflow-hidden shadow-lg bg-white border text-center">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{props.title}</div>
          <p className="text__body italic">"{props.body}"</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="rounded overflow-hidden shadow-lg bg-white border text-center">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{props.title}</div>
          <p className="text__body">{props.body}</p>
        </div>
        <div className="px-6 py-4">
          <CardLink href={props.link} text={props.text} />
        </div>
      </div>
    );
  }
};

export default Card;