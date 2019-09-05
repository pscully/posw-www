import React from "react";
import { NextSeo } from "next-seo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faEnvelope,
  faPhoneSquare,
  faHandshake
} from "@fortawesome/free-solid-svg-icons";
import Card from "../components/card/card";
import Button from "../components/button/button";
import SiteLink from "../components/link/link";
import "../style.css";

const pageTitle = "Possible Web // Websites & SEO On Demand";

const cardOneTitle = "A. Malvehy";
const cardOneBody =
  "They are responsive, they listen, they are good at what they do, and they are reasonably priced.";

const cardTwoTitle = "B. LIMERICK";
const cardTwoBody =
  "Offered to help in all aspects of getting my internet based business tools up and running - even when they weren't obligated to do so.";

const cardThreeTitle = "J. CAMPBELL";
const cardThreeBody =
  "They have been an integral part of getting our small, local brand a big brand presence online. Highly recommend!";

const cardFourTitle = "R. PETROVSKY";
const cardFourBody =
  "This team has excelled at branding, content marketing, SEO and helping grow our social marketing program!";

const cardFiveTitle = "J. GALLES";
const cardFiveBody =
  "Highly professional and responsive. Patrick and Possible Web are our go-to partner in the Carolina region.";

class Agency extends React.Component {
  render() {
    return (
      <>
        <NextSeo
          title="Using More of Config"
          description="This example uses more of the available config options."
          // canonical="https://www.canonical.ie/"
          // openGraph={{
          // 	url: "https://www.url.ie/a",
          // 	title: "Open Graph Title",
          // 	description: "Open Graph Description",
          // 	images: [
          // 		{
          // 			url: "https://www.example.ie/og-image-01.jpg",
          // 			width: 800,
          // 			height: 600,
          // 			alt: "Og Image Alt"
          // 		},
          // 		{
          // 			url: "https://www.example.ie/og-image-02.jpg",
          // 			width: 900,
          // 			height: 800,
          // 			alt: "Og Image Alt Second"
          // 		},
          // 		{ url: "https://www.example.ie/og-image-03.jpg" },
          // 		{ url: "https://www.example.ie/og-image-04.jpg" }
          // 	],
          // 	site_name: "SiteName"
          // }}
          // twitter={{
          // 	handle: "@handle",
          // 	site: "@site",
          // 	cardType: "summary_large_image"
          // }}
        />
        <div>
          <div className="container flex flex-wrap overflow-hidden mx-auto">
            <div className="w-full overflow-hidden sm:w-full md:w-full lg:w-1/2 xl:w-1/2 pt-8 lg:py-24">
              <div className="mx-4">
                <h1 className="h1 text-gray-900">We are Possible Web.</h1>
                <p className="text__body text-gray-900">
                  Since 2011 we have built, optimized, managed, fixed, updated,
                  and marketed hundreds of WordPress websites for businesses
                  around the world. Now, with our brand new platform and
                  technology we are making WordPress work even harder for you
                  and your business. Not on WordPress? For the right project, we
                  are available for custom marketing strategy. We are
                  headquartered in Charlotte, NC. Contact us or request your
                  invite to our Client Dashboard now.
                </p>
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
        </div>
        <div className="flex">
          <div className="w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 flex justify-end">
            <Button text="WordPress Service Menu" link="/wordpress-services" />
          </div>
          <div className="w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 px-4 flex">
            <Button text="Web Design Quote Form" />
          </div>
        </div>
        <div className="container mx-auto my-8 p-4">
          <div className="flex flex-wrap items-center -mx-2">
            <div className="w-full lg:w-1/3 sm:w-1/2 px-2">
              <h2 className="h2">Our clients say...</h2>
              <p className="text__body">
                Browse some of our latest reviews, we think they speak volumes
                about how much we care.
              </p>
            </div>

            <div className="w-full lg:w-1/3 sm:w-1/2 px-2 my-2">
              <Card
                title={cardOneTitle}
                body={cardOneBody}
                link="/agency"
                text="Start now"
                style="quote"
              />
            </div>

            <div className="w-full lg:w-1/3 sm:w-1/2 px-2 my-2 hidden lg:block">
              <Card
                title={cardTwoTitle}
                body={cardTwoBody}
                link="/agency"
                text="We can help"
                style="quote"
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
                style="quote"
              />
            </div>

            <div className="w-full lg:w-1/3 sm:w-1/2 px-2 my-2">
              <Card
                title={cardFourTitle}
                body={cardFourBody}
                link="/agency"
                text="Get a quote"
                style="quote"
              />
            </div>

            <div className="w-full lg:w-1/3 sm:w-1/2 px-2 my-2 hidden lg:block">
              <Card
                title={cardFiveTitle}
                body={cardFiveBody}
                link="/agency"
                text="SEO Programs"
                style="quote"
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
                style="quote"
              />
            </div>

            <div className="w-full lg:w-1/3 sm:w-1/2 px-2 my-2">
              <Card
                title={cardFiveTitle}
                body={cardFiveBody}
                link="/agency"
                text="SEO Program"
                style="quote"
              />
            </div>
          </div>
        </div>
        <div className="container flex flex-col mx-auto md:my-24">
          <p className="text__body text-center mx-12">
            WordPress sucks! What else you got? Wow, such language! Just kidding
            – we curse about WordPress all the time. In fact, we wrote about it
            here. It’s true. WordPress definitely has it’s limitations. It’s
            PERFECT for small business websites that require the basics out of
            the box and some options for publishing. BUT when you start to push
            it too far (eCommerce, web applications, etc.) It can become not the
            right tool very quickly. Our team is skilled in the foundations of
            WordPress (PHP, MySQL, Javascript, HTML, CSS) and we have built much
            more advanced websites using platforms like Laravel, Code Ignitor,
            React, VueJS and more. We’re also all JAMstacked out – we love
            Gatsby and building sites that load in milliseconds. If WordPress is
            NOT your cup of tea – we invite you to join us for an espresso and
            hear about how the web in evolving and how your business can take
            advantage of these new technologies.
          </p>
          <div className="flex justify-center mt-4">
            <SiteLink text="Learn more about us." href="/agency" />
          </div>
        </div>
        <div id="section--img">
          <div className="max-w-xl bg-white rounded shadow px-6 py-6 mx-4 md:mx-auto">
            <h2 className="h2 mb-2">Contact Us</h2>
            <hr />
            <div className="md:flex justify-between mt-2 text-justify md:text-left">
              <div className="mb-4">
                <div className="my-1">
                  <FontAwesomeIcon icon={faEnvelope} /> hello@possibleweb.com
                </div>
                <div className="my-1">
                  <FontAwesomeIcon icon={faEnvelope} /> care@possibleweb.com
                </div>
                <div className="my-1">
                  <FontAwesomeIcon icon={faAddressCard} /> Charlotte, NC
                </div>
                <div className="my-1">
                  <FontAwesomeIcon icon={faHandshake} /> @possibleweb
                </div>
                <div className="my-1">
                  <FontAwesomeIcon icon={faPhoneSquare} /> 704-594-5796
                </div>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13062.99770676619!2d-80.8558365!3d35.0630033!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa26703c0f6395a5!2sPossible%20Web!5e0!3m2!1sen!2sus!4v1566770789430!5m2!1sen!2sus"
                frameBorder="0"
                allowFullScreen=""
              ></iframe>
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

export default Agency;
