import React from "react";
import Link from "next/link";

export default () => {
  return (
    <>
      <Link href="/">
        <a>
          <div className=" flex justify-center">
            <span className="brand__cyclone">
              <img src="https://files.possibleweb.com/file/w_30,h_30/01brands/cyclone-copy.png" />
            </span>
            <span className="brand__text ml-2">Possible Web</span>
          </div>
        </a>
      </Link>
      <style jsx>
        {`
          .brand__text {
            font-weight: 700;
            font-size: 1.3rem;
          }
        `}
      </style>
    </>
  );
};
