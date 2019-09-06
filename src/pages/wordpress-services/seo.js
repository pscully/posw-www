import React from "react";
import { NextSeo } from "next-seo";
import SiteLink from "../../components/link/link";
import PricingTable from "../../components/pricing/pricingTable";
import "../../style.css";
import SideCard from "../../components/sidecard/sideCard";
import Alert from "../../components/alert/alert";
import Bottom from "../../components/bottom/bottom"

export default class Seo extends React.Component {
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
								<div className="mx-4 mb-12">
									<h1 className="h1">Powerful Site-specific SEO</h1>
									<p className="text__body">
										Is search engine optimization for you? Here’s the deal. If
										you are ready to seriously grow your business online then
										SEO is probably a good weapon to add to your marketing
										arsenal.
									</p>
									<PricingTable
										type="monthly"
										price="999"
										subtext="starts at"
										benefitOne="Powerful proven process"
										benefitTwo="Limited spots available"
										benefitThree="Local & global campaigns"
										buttonText="Apply for Access"
									/>
									<Alert
										text="We only take on as many SEO projects as we feel comfortable with. Apply
												here for your invitation."
									/>
									<p className="text__body">
										If you need customers tomorrow, SEO is not the solution for
										you. But if you want to position your business for a long,
										successful future then we would love to discuss search
										engine optimization options for your business. Our SEO is a
										bit different. We focus on creating awesome content for your
										target audience on and off your website that makes Google
										and other search engines take notice. Schedule 15 minutes to
										chat with us today about our strategies OR register online
										and start our local GMB SEO program today. For a flat
										monthly fee our team will provide you with{" "}
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
										server.
									</p>
									<ul>
										<h4>Service Includes</h4>
										<li></li>
									</ul>
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
					<Bottom />
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
