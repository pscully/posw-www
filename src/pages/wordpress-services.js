import React from "react";
import { NextSeo } from "next-seo";
import Card from "../components/card/card";
import Button from "../components/button/button";
import "../style.css";

const cardOneTitle = "CARE";
const cardOneBody =
  "Private hosting and unlimited support. We care for your WordPress website like we want our site cared for. You get a private optimized server, backup, security, SSL, and more.";

const cardTwoTitle = "TASK";
const cardTwoBody =
  "Got a problem with your website? Our team can investigate, find the issue, and apply the fix often in just a few hours. Send us your issue and get on with running your business.";

const cardThreeTitle = "FAST";
const cardThreeBody =
  "If your website is slow then you are losing money. It's a proven fact. We know what makes WordPress slow and how to fix it. Our FAST service will shave seconds off your load time.";

const cardFourTitle = "WORK";
const cardFourBody =
  "If you need custom PHP development we've got you covered. From developing websites from scratch, custom plugins, or integrations with 3rd party platforms, we deliver high quality.";

const cardFiveTitle = "DRED";
const cardFiveBody =
  "Our version of SEO. Digital Real Estate Domination - it's SEO but to the next level. We rank more than just your website, we get you as many spots as possible on search results.";

class Plans extends React.Component {
  render() {
    return (
      <>
        {/* <NextSeo
          title="WordPress Managed Right - Hosting / Support / SEO | Possible Web"
          description="Possible Web is a top rated team of WordPress experts. We care for your website how we would want our cared for. Get access today."
          canonical="https://possibleweb.com/plans/"
          openGraph={{
            url: "https://possibleweb.com/plans/",
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
        /> */}
        <div className="container flex flex-wrap overflow-hidden mx-auto">
          <div className="w-full overflow-hidden sm:w-full md:w-full lg:w-1/2 xl:w-1/2 pt-8 lg:py-24">
            <div className="mx-4">
              <h1 className="h1 text-gray-900">Fair Pricing. Tons of Value.</h1>
              <p className="text__body text-gray-900">
                Our WordPress services are based on giving you more. As a
                Possible Web client you get the best technology, unlimited
                support, discounts on other services, and more. Whether you just
                need something fixed quick, or are looking for high-powered
                WordPress hosting, our team and tech stack are here to help.
              </p>
              <div className="mt-6">
                <Button
                  className="button--purple"
                  text="GET ACCESS"
                  type="modal"
                />
              </div>
            </div>
          </div>
          <div className="w-full overflow-hidden sm:w-full md:w-full lg:w-1/2 xl:w-1/2 pt-10 md:py-24">
            <img
              src="https://files.possibleweb.com/file/w_600,h_400/possibleweb/fast-affordable-websites.png"
              alt="Fast, Affordable Websites"
              className="mx-auto"
            />
          </div>
        </div>
        <div className="container mx-auto my-8 p-4">
          <div className="flex flex-wrap items-center -mx-2">
            <div className="w-full lg:w-1/3 sm:w-1/2 px-2">
              <h2 className="h2">WordPress Services</h2>
              <p className="text__body">
                Your quest to find reliable WordPress services ends here. If
                your business relies on WordPress, you can rely on us whether it
                is hosting and support or SEO and custom development. Get more
                out of your website by relying on one true partner for all your
                website needs.
              </p>
            </div>

            <div className="w-full lg:w-1/3 sm:w-1/2 px-2 my-2">
              <Card
                title={cardOneTitle}
                body={cardOneBody}
                link="/agency"
                text="Start now"
              />
            </div>

            <div className="w-full lg:w-1/3 sm:w-1/2 px-2 my-2 hidden lg:block">
              <Card
                title={cardTwoTitle}
                body={cardTwoBody}
                link="/agency"
                text="We can help"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-2">
            <div className="w-full lg:w-1/3 sm:w-1/2 px-2 my-2">
              <Card
                title={cardThreeTitle}
                body={cardThreeBody}
                link="/agency"
                text="Get Faster"
              />
            </div>

            <div className="w-full lg:w-1/3 sm:w-1/2 px-2 my-2">
              <Card
                title={cardFourTitle}
                body={cardFourBody}
                link="/agency"
                text="Get a quote"
              />
            </div>

            <div className="w-full lg:w-1/3 sm:w-1/2 px-2 my-2 hidden lg:block">
              <Card
                title={cardFiveTitle}
                body={cardFiveBody}
                link="/agency"
                text="SEO Programs"
              />
            </div>
          </div>
          {/* Adding the third row on mobile */}
          <div className="flex flex-wrap items-center -mx-2 lg:hidden">
            <div className="w-full lg:w-1/3 sm:w-1/2 px-2 my-2">
              <Card
                title={cardTwoTitle}
                body={cardTwoBody}
                link="/agency"
                text="We can help"
              />
            </div>

            <div className="w-full lg:w-1/3 sm:w-1/2 px-2 my-2">
              <Card
                title={cardFiveTitle}
                body={cardFiveBody}
                link="/agency"
                text="SEO Program"
              />
            </div>
          </div>
        </div>
        <style jsx>
          {`
            #section--img {
              background: url(https://files.possibleweb.com/file/possible-web-block-sm.jpg)
                no-repeat center center fixed;
              -webkit-background-size: cover;
              -moz-background-size: cover;
              -o-background-size: cover;
              background-size: cover;
              padding-top: 200px;
              padding-bottom: 200px;
            }
          `}
        </style>
        <style global jsx>
          {`
            body {
              background: #f2f2f2;
            }
          `}
        </style>
      </>
    );
  }
}

export default Plans;
