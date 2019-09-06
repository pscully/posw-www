import React from "react";
import Button from "../components/button/button";
import SiteLink from "../components/link/link";
import "../style.css";
import { NextSeo } from "next-seo";

class ThankYou extends React.Component {
  render() {
    return (
      <>
        <NextSeo
          noindex={true}
          title="Thank You - Please Confirm Your Email"
          description=""
          canonical="https://possibleweb.com/thank-you"
        ></NextSeo>
        <div id="page-wrap">
          <div>
            <div className="container flex flex-wrap overflow-hidden mx-auto">
              <div className="w-full md:w-3/12 overflow-hidden my-4 md:my-12 bg-white border shadow rounded-lg mx-2 px-2">
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
              <div className="w-full md:w-8/12 overflow-hidden my-4 md:my-12 bg-white border shadow rounded-lg mx-2 px-2">
                <div className="ml-4">
                  <h1 className="h1">Thank You</h1>
                  <p></p>
                </div>
              </div>
            </div>
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

export default ThankYou;
