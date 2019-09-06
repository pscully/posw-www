import React from "react";
import { NextSeo } from "next-seo";
import groq from "groq";
import client from "../client";
import Card from "../components/card/card";
import Button from "../components/button/button";
import Form from "../components/form/form";
import Link from "next/link";
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
  "If you need custom PHP development we've got you covered. From developing websites from scratch, custom plugins, or integrations with 3rd party platforms.";

const cardFiveTitle = "DRED";
const cardFiveBody =
  "Our version of SEO. Digital Real Estate Domination - it's SEO but to the next level. We rank more than just your website, we get you as many spots as possible on search results.";

const Services = props => {
  const { posts = [] } = props;
    return (
      <>
        <NextSeo
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
        />
        <div className="container flex flex-wrap overflow-hidden mx-auto">
          <div className="w-full overflow-hidden sm:w-full md:w-full lg:w-1/2 xl:w-1/2 pt-4 lg:py-12">
            <div className="mx-4">
              <h1 className="h1 text-gray-900">WordPress Services</h1>
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
                  link="https://possibleweb.spp.io/signup"
                />
              </div>
            </div>
          </div>
          <div className="w-full overflow-hidden sm:w-full md:w-full lg:w-1/2 xl:w-1/2 pt-6 md:py-12">
            <img
              src="https://files.possibleweb.com/file/w_600,h_400/possibleweb/fast-affordable-websites.png"
              alt="Fast, Affordable Websites"
              className="mx-auto"
            />
          </div>
        </div>
        <div className="container mx-auto p-4">
          <div className="flex flex-wrap items-center -mx-2">
            <div className="w-full lg:w-1/3 sm:w-1/2 px-2">
              <h2 className="h2">Fair Pricing. Tons of Value.</h2>
              <p className="text__body">
                Our team specializes in WordPress. We can design, build, support, maintain, 
                and market a business website for you. All of your website needs in one place. 
                
              </p>
            </div>

            <div className="w-full lg:w-1/3 sm:w-1/2 px-2 my-2">
              <Card
                title={cardOneTitle}
                body={cardOneBody}
                link="/wordpress-services/managed-hosting"
                text="Start now"
              />
            </div>

            <div className="w-full lg:w-1/3 sm:w-1/2 px-2 my-2 hidden lg:block">
              <Card
                title={cardTwoTitle}
                body={cardTwoBody}
                link="/wordpress-services/task"
                text="We can help"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-2">
            <div className="w-full lg:w-1/3 sm:w-1/2 px-2 my-2">
              <Card
                title={cardThreeTitle}
                body={cardThreeBody}
                link="/wordpress-services/increase-speed"
                text="Get Faster"
              />
            </div>

            <div className="w-full lg:w-1/3 sm:w-1/2 px-2 my-2">
              <Card
                title={cardFourTitle}
                body={cardFourBody}
                link="/wordpress-services/development"
                text="Get a quote"
              />
            </div>

            <div className="w-full lg:w-1/3 sm:w-1/2 px-2 my-2 hidden lg:block">
              <Card
                title={cardFiveTitle}
                body={cardFiveBody}
                link="/wordpress-services/seo"
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
        <div>
				<div className="container flex flex-wrap overflow-hidden mx-auto">
					<div className="w-full overflow-hidden py-8 mt-8 bg-white rounded-lg shadow-lg mx-4">
						<div className="mx-4">
							<div className="h2">Recent Posts on WordPress</div>
							<ul>
								{posts.map(
									({ _id, title = "", slug = "", _updatedAt = "" }) =>
										slug && (
											<li key={_id} className="my-4">
												<Link href="/[slug]" as={`/${slug.current}`}>
													<a className="text-2xl underline">{title}</a>
												</Link>{" "}
											</li>
										)
								)}
							</ul>
						</div>
					</div>
					<div className="container flex justify-between flex-wrap overflow-hidden mx-auto mb-8">
						<div className="w-full md:w-7/12 overflow-hidden py-8 bg-white rounded-lg shadow-lg mx-4 mt-8">
							<div className="mx-8">
								<span className="text-2xl pt-4">
									Get our internal SEO notes. What we are learning, testing,
									and optimizing. Apply our notes to your business and see results.
								</span>

							</div>
						</div>
						<div className="w-full md:w-4/12 overflow-hidden py-8 bg-white rounded-lg shadow-lg mx-4 mt-8">
							<div className="flex justify-center">
								<Form />
							</div>
						</div>
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
      </>
    );
}

Services.getInitialProps = async () => ({
	posts: await client.fetch(groq`
      *[_type == "post"]|order(publishedAt desc)
    `)
});

export default Services;
