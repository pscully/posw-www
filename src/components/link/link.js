import React from "react";
import Link from "next/link";

const SiteLink = props => {
  return (
    <>
      <style jsx>{`
        a {
          text-decoration: none;
          color: #32518B;
        }
        a:hover {
          color: #982c61;
          border-bottom: 2px solid #4a4a4a;
        }
      `}</style>
      <Link href={props.href}>
        <a className="link__body" title={props.text}>
          {props.text}
        </a>
      </Link>
    </>
  );
};

export default SiteLink;
