import "../style.css";
import { Component } from "react";
import { NextSeo } from "next-seo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Card from "../components/card/card";
import Button from "../components/button/button";
import SiteLink from "../components/link/link";
import Schema from "../components/schema/schema";
import Particles from "react-particles-js";

const particlesOptions = {
	particles: {
		number: {
			value: 50
		},
		size: {
			value: 3
		}
	},
	interactivity: {
		events: {
			onhover: {
				enable: true,
				mode: "repulse"
			}
		}
	}
};

const pageTitle = "Possible Web // Websites & SEO On Demand";

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

class Home extends Component {
	render() {
		return (
			<>
				<NextSeo
					title="WordPress Managed Right - Hosting / Support / SEO | Possible Web"
					description="Possible Web is a top rated team of WordPress experts. We care for your website how we would want our cared for. Get access today."
					canonical="https://posw-www.netlify.com/"
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
				/>
				<Particles
					className="particles hidden md:block"
					params={particlesOptions}
				/>
				<div className="container flex flex-wrap overflow-hidden mx-auto">
					<div className="w-full overflow-hidden sm:w-full md:w-full lg:w-1/2 xl:w-1/2 pt-4 lg:py-12">
						<div className="mx-4">
							<h1 className="h1 text-white">No Stress, WordPress</h1>
							<p className="text__body text-white">
								Get private hosting, site specific SEO, and unlimited white
								glove care that makes your WordPress website outperform the
								competition - converting more leads, and making you more money.
							</p>
							<ul className="mt-3">
								<li className="text__body text-white">
									<FontAwesomeIcon icon={faCheckCircle} /> Private, optimized
									hosting
								</li>
								<li className="text__body text-white">
									<FontAwesomeIcon icon={faCheckCircle} /> Site-specific SEO
								</li>
								<li className="text__body text-white">
									<FontAwesomeIcon icon={faCheckCircle} /> Unlimited Support &
									Care
								</li>
							</ul>
							<div className="mt-6">
								<Button
									className="button--purple"
									text="SEE SERVICES"
									link="/wordpress-services"
								/>
							</div>
						</div>
					</div>
					<div className="w-full overflow-hidden sm:w-full md:w-full lg:w-1/2 xl:w-1/2 pt-6 lg:py-12">
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
							<h2 className="h2 text-white">WordPress Services</h2>
							<p className="text__body text-white">
								Your quest to find reliable WordPress services ends here. If
								your business relies on WordPress, you can rely on us whether it
								is hosting and support or SEO and custom development.
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
								link="/wordpress-services/task"
								text="We can help"
							/>
						</div>

						<div className="w-full lg:w-1/3 sm:w-1/2 px-2 my-2">
							<Card
								title={cardFiveTitle}
								body={cardFiveBody}
								link="/wordpress-services/development"
								text="SEO Program"
							/>
						</div>
					</div>
				</div>
				<div className="container flex flex-col mx-auto md:my-24">
					<p className="text__body text-white text-center mx-12">
						We are Possible Web. Since 2012 we have been providing expert
						WordPress and digital marketing services to businesses across the
						United States. Simply put, we are WordPress experts. Anything you
						could possibly need for your WordPress website we can help with. Our
						CARE service keeps your website running smooth and includes
						unlimited support. Our DRED service causes fear in the hearts of
						your competition. We want nothing more than to help your WP site
						work up to it's full potential for you. It is your number one asset,
						although somedays we know it can feel like your number one headache.
						We are here to take away that pain, leaving you to run and grow your
						business.
					</p>
					<div className="flex justify-center mt-4">
						<SiteLink text="Learn more about us." href="/agency" />
					</div>
				</div>
				<Schema page="index" />
				
			</>
		);
	}
}

export default Home;
