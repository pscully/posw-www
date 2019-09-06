import React from "react";
import { NextSeo } from "next-seo";
import SiteLink from "../../components/link/link";
import Button from "../../components/button/button";
import "../../style.css";
import SideCard from "../../components/sidecard/sideCard";
import PricingTable from "../../components/pricing/pricingTable";

export default class Speed extends React.Component {
	render() {
		return (
			<>
				<NextSeo
					title="WordPress Support - Unlimited Monthly WP Tasks // CARE by Possible Web"
					description="Get the monthly help you need for your WordPress site. For one flat rate we do unlimited tasks plus take care of all the updates and maintenance your website needs."
					canonical="https://possibleweb.com/wordpress-services/support"></NextSeo>
				<div id="page-wrap">
					<div>
						<div className="container flex flex-wrap overflow-hidden mx-auto">
							<div className="w-full md:w-3/12 overflow-hidden my-4 md:my-12 bg-white border shadow rounded-lg mx-2 px-2">
								<div className="mt-3">
									<SideCard />
								</div>
								<div className="ml-2 mt-6">
									{/* <Button text="Get Access" type="modal" /> */}
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
								<div className="ml-4 mb-6">
									<h1 className="h1">Speed Up Your Website</h1>
									<PricingTable
										type="single"
										price="399"
										subtext="per WordPress website"
										benefitOne="Technical site audit"
										benefitTwo="Code & database cleanup"
										benefitThree="Image Optimization"
										buttonText="Get Faster Now"
									/>
									<p className="text__body">
										WordPress can be a headache. It's great for certain things
										like managing website content and easily adding users and
										permissions, or quickly building a custom online store, but
										when it comes to taking care of your WordPress site - things
										get a little dicey. That's where we come in.
									</p>
									<p className="text__body">
										For a flat monthly fee our team will provide you with{" "}
										<span className="font-bold italic">three key services</span>{" "}
										that will make your life easier. First, we host your website
										on private optimized technology. Second, we do all the
										behind-the-scenes maintenance tasks to keep your website
										performing it's best, and finally we provide unlimited
										monthly support tasks in case you need something changed,
										added, or updated.
									</p>
									<h2 className="h2">Optimized WordPress Hosting</h2>
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
