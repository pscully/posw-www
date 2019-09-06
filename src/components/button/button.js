import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Button = props => {
  if (props.type === "modal") {
    return (
      <>
        <button className="modal-open inline-block shadow rounded-lg bg-bluedark hover:bg-bluelight text-white py-2 px-4">
          {props.text} <FontAwesomeIcon icon={faArrowRight} />
        </button>
        <style jsx>
          {`
            button:active {
              transform: translateY(2px);
            }
          `}
        </style>
      </>
    );
  } else {
    return (
      <>
        <Link href={props.link}>
          <a className="inline-block shadow rounded-lg bg-bluedark hover:bg-bluelight text-white py-2 px-4">
            {props.text} <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </Link>
        <style jsx>
          {`
            a:active {
              transform: translateY(2px);
            }
          `}
        </style>
      </>
    );
  }
};

export default Button;
