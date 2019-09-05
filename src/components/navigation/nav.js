import React from "react";
import Logo from "../logo/logo";
import Sidebar from "./sidebar";

class Nav extends React.Component {
  render() {
    return (
      <>
        <nav className="flex flex-row items-center justify-between bg-white shadow py-6 px-12">
          <div className="flex justify-start flex-shrink-0 h-full">
            <Logo />
          </div>
          <style jsx>{`
            a {
              text-decoration: none;
              color: #2c8898;
            }
            a:hover {
              color: #982c61;
              border-bottom: 2px solid #4a4a4a;
            }

            .brand__text {
              font-weight: 700;
              font-size: 1.3rem;
            }

            ul > li {
              font-size: 14px;
              cursor: pointer;
            }

            @media only screen and (max-width: 600px) {
              .desktop-only {
                display: none;
              }
            }
          `}</style>
        </nav>
        <Sidebar
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
        />
      </>
    );
  }
}

export default Nav;
