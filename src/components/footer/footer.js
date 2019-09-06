import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import Logo from "../logo/logo";
import FooterLinks from "./links";

library.add(fab);

const socialLinks = [
  {
    href: "https://www.facebook.com/possibleweb",
    label: "facebook",
    icon: ["fab", "facebook"]
  },
  {
    href: "https://www.twitter.com/possibleweb",
    label: "twitter",
    icon: ["fab", "twitter"]
  },
  {
    href: "https://www.linkedin.com/company/possibleweb",
    label: "linkedin",
    icon: ["fab", "linkedin"]
  },
  {
    href: "https://www.instagram.com/possibleweb",
    label: "instagram",
    icon: ["fab", "instagram"]
  }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

let date = new Date();
let year = date.getFullYear();

const Footer = () => (
  <>
    <footer className="font-sans bg-white py-8 px-4">
      <div className="mx-auto container overflow-hidden flex flex-col md:flex-row justify-between pb-4 text-center md:text-left">
        <div className="w-full text-grey-darkest mt-6 md:mt-0 leading-normal">
          <h4 className="py-2 uppercase font-bold tracking-wide">
            WordPress Experts
          </h4>
          <ul className="flex flex-col md:flex-row">
            {FooterLinks.map(({ key, href, label }) => (
              <li key={key} className="mr-4 inline-block">
                <Link href={href}>
                  <a>{label}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-grey-dark flex flex-col w-full md:w-1/3 mt-6 md:mt-0">
          <h4 className="inline-block py-2 mx-2 uppercase font-bold tracking-wide text-grey-darkest md:text-right">
            Follow Us
          </h4>
          <div className="flex md:pl-4 justify-center md:justify-end">
            <ul className="flex flex-row justify-around">
              {socialLinks.map(({ key, href, icon }) => (
                <li key={key} className="mx-2 mt-2">
                  <a href={href} rel="nofollow noreferrer">
                    <FontAwesomeIcon icon={icon} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Logo />
      <div className="pt-4 mt-4 text-grey-darker text-xs border-t border-grey-lighter text-center">
        {" "}
        ©{year} Scully Media. All rights reserved.
      </div>
    </footer>

    <style jsx>{`
      a {
        text-decoration: none;
        color: #32518B;
      }
      a:hover {
        color: #982c61;
        border-bottom: 2px solid #4a4a4a;
      }

      ul > li {
        font-size: 14px;
        cursor: pointer;
      }
    `}</style>
  </>
);

export default Footer;
