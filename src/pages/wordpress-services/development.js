import React from "react";
import { NextSeo } from "next-seo";
import SiteLink from "../../components/link/link";
import SideCard from "../../components/sidecard/sideCard";
import Button from "../../components/button/button";
import "../../style.css";

const portfolio = [
	{
		src:
			"https://files.possibleweb.com/file/possibleweb/portfolio/semtrain.webp",
		alt: "Engineering Website Development"
	},
	{
		src:
			"https://files.possibleweb.com/file/possibleweb/portfolio/acceleratebasketball.webp",
		alt: "Sports Training Website Development"
	},
	{
		src:
			"https://files.possibleweb.com/file/possibleweb/portfolio/netsanity.webp",
		alt: "SaaS Product Website Development"
	},
	{
		src:
			"https://files.possibleweb.com/file/possibleweb/portfolio/cwta-portfolio.png.png",
		alt: "Networking Website Development"
	},
	{
		src:
			"https://files.possibleweb.com/file/possibleweb/portfolio/nwta-portfolio.png.png",
		alt: "Business Website Development"
	},
	{
		src:
			"https://files.possibleweb.com/file/possibleweb/portfolio/rawlscheerclarymingo.webp",
		alt: "Lawyer Website Development"
	},
	{
		src: "https://files.possibleweb.com/file/possibleweb/portfolio/investment-company-website.png",
		alt: "Investment Company Website Development"
	},
	{
		src: "https://files.possibleweb.com/file/possibleweb/portfolio/condor-usa.png",
		alt: "Ecommerce Website Development"
	},
	{
		src: "https://files.possibleweb.com/file/possibleweb/portfolio/bakery-website.png",
		alt: "Bakery Website Development"
	}
].map(image => {
	image.key = `image-${image.alt}`;
	return image;
});

export default class Development extends React.Component {
	render() {
		return (
			<>
				<NextSeo
					title="WordPress Support - Unlimited Monthly WP Tasks // CARE by Possible Web"
					description="Get the monthly help you need for your WordPress site. For one flat rate we do unlimited tasks plus take care of all the updates and maintenance your website needs."
					canonical="https://possibleweb.com/wordpress-services/support"></NextSeo>
				<div id="page-wrap">
					<div>
						<div className="container flex flex-wrap-reverse overflow-hidden mx-auto">
							<div className="w-full md:w-3/12 overflow-hidden my-4 md:my-12 bg-white border shadow rounded-lg mx-2 px-2">
								<div className="mt-3">
									<SideCard />
								</div>
								<div className="ml-2 mt-6">
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
									<h1 className="h1">Custom Web Development</h1>
									<p className="text__body">
										Your business website is not longer just a digital brochure.
										It is often your customers first (and sometimes only)
										impression of your business. Due to people using search and
										social media, plus the rise of the mobile Internet, people
										are finding businesses online first. Your website needs to
										be a interactive portal where your potential customers can
										discover who you are, what you do, and why you do it. Get
										the website your business deserves and get 6 Months of
										premium hosting and management included.
									</p>
									<h2 className="h2">
										There Are 1 Billion (With A B) People Who Can Build You A
										WordPress Website.
									</h2>
									<p className="text__body">
										Each will do it slightly differently. A few will take the
										time to do it right, most will cut corners. Here’s the deal.
										If you want to focus on growing your business and not the
										dozens of monthly tasks that come with running a WordPress
										website, let alone the things to think about if you want
										your website to stay competitive, managed WordPress hosting
										could be for you. Why not give our service a try? We’re
										happy to offer you one minor support task to see how we
										work, plus for a limited time we will transfer your website
										for free to your new private managed SSD server.{" "}
									</p>
									<h2 className="h2">Monthly WordPress Maintenance</h2>
									<p className="text__body">
										Here’s the deal. If you want to focus on growing your
										business and not the dozens of monthly tasks that come with
										running a WordPress website, let alone the things to think
										about if you want your website to stay competitive, managed
										WordPress hosting could be for you. Why not give our service
										a try? We’re happy to offer you one minor support task to
										see how we work, plus for a limited time we will transfer
										your website for free to your new private managed SSD
										server.{" "}
									</p>
									<h2 className="h2">Unlimited WP Support Tasks</h2>
									<p className="text__body">
										Here’s the deal. If you want to focus on growing your
										business and not the dozens of monthly tasks that come with
										running a WordPress website, let alone the things to think
										about if you want your website to stay competitive, managed
										WordPress hosting could be for you. Why not give our service
										a try? We’re happy to offer you one minor support task to
										see how we work, plus for a limited time we will transfer
										your website for free to your new private managed SSD
										server.{" "}
									</p>
									<div className="my-12">
										<ul>
											{portfolio.map(({ key, src, alt }) => (
												<li key={key} className="mx-2 mt-2">
													<img src={src} alt={alt} />
												</li>
											))}
										</ul>
									</div>
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
