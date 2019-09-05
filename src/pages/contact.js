import React from "react";
import Button from "../components/button/button";
import SiteLink from "../components/link/link";
import "../style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { NextSeo } from "next-seo";
import Schema from "../components/schema/schema";

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

const ContactInfo = () => {
  return (
    <>
      <div>
        <ul>
          <li className="mb-2">
            <span className="font-bold">Sales: </span>hello@possibleweb.com
          </li>
          <li className="mb-2">
            <span className="font-bold">Support: </span>care@possibleweb.com
          </li>
          <li className="mb-2">
            <span className="font-bold">Phone: </span>+1 (704) 594-5796
          </li>
          <li className="mb-2">
            <span className="font-bold">Headquarters: </span>Charlotte, NC
          </li>
          <ul className="flex flex-row">
            {socialLinks.map(({ key, href, icon }) => (
              <li key={key} className="mx-2 mt-2">
                <a href={href}>
                  <FontAwesomeIcon icon={icon} />
                </a>
              </li>
            ))}
          </ul>
        </ul>
      </div>
    </>
  );
};

class Contact extends React.Component {
  render() {
    return (
      <>
        <NextSeo
          title="WordPress Managed Right - Hosting / Support / SEO | Possible Web"
          description="Possible Web is a top rated team of WordPress experts. We care for your website how we would want our cared for. Get access today."
          canonical="https://possibleweb.com"
          openGraph={{
            url: "https://possibleweb.com",
            title:
              "WordPress Managed Right - Hosting / Support / SEO | Possible Web",
            description:
              "Possible Web is a top rated team of WordPress experts. We care for your website how we would want our cared for. Get access today.",
            images: [
              {
                url:
                  "https://files.possibleweb.com/file/w_600,h_400/possibleweb/fast-affordable-websites.png",
                width: 800,
                height: 600,
                alt: "WordPress Managed Services by Possible Web"
              }
            ],
            site_name: "Possible Web"
          }}
          twitter={{
            handle: "@possibleweb",
            site: "@site",
            cardType: "summary_large_image"
          }}
        ></NextSeo>
        <div id="page-wrap">
          <div>
            <div className="container flex flex-wrap overflow-hidden mx-auto">
              <div className="w-full md:w-3/12 overflow-hidden my-4 md:my-6 bg-white border shadow rounded-lg mx-2 px-2">
                <h2 className="h2 ml-2">Real Care</h2>
                <p className="m-2 text__body">
                  Our White Glove CARE service for WordPress sites is the
                  ultimate stress reliever. Forget about downtime, SSL errors,
                  slow websites, plugin updates, and all the other headaches
                  that come along with WordPress.
                </p>
                <div className="ml-2 mt-6">
                  <Button text="Get Access" type="modal" />
                  <div className="mt-6">
                    <ul>
                      <li className="inline mr-2">
                        <SiteLink text="Privacy" href="/privacy" />
                      </li>
                      <li className="inline mx-2">
                        <SiteLink text="Terms" href="/terms" />
                      </li>
                      <li className="inline mx-2">
                        <SiteLink text="Sitemap" href="/sitemap" />
                      </li>
                    </ul>
                    <p className="my-6">Copyright 2019, Scully Media, Inc.</p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-8/12 overflow-hidden my-4 md:my-6 bg-white border shadow rounded-lg mx-2 px-2">
                <div className="ml-4">
                  <h1 className="h1">Contact Us</h1>
                  <div className="flex flex-wrap">
                    <div className="w-full md:w-1/2">
                      <ContactInfo />
                    </div>
                    <div className="w-full md:w-1/2">
                      <div data-paperform-id="pw-contact-us"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="schema">
            <Schema page="contact" />
          </div>
          <style global jsx>
            {`
              body {
                background: #f2f2f2;
              }
            `}
          </style>
        </div>
      </>
    );
  }
}

export default Contact;
