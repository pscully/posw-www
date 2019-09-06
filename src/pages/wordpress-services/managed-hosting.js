import React from "react";
import { NextSeo } from "next-seo";
import SiteLink from "../../components/link/link";
import SideCard from "../../components/sidecard/sideCard";
import PricingTable from "../../components/pricing/pricingTable";
import Button from "../../components/button/button";
import "../../style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

export default class Care extends React.Component {
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
								<div className="mx-4 mb-12">
									<h1 className="h1">WordPress Support & Care</h1>
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
									<PricingTable
										type="monthly"
										price="199"
										subtext="per WordPress website"
										benefitOne="No setup, monthly, or hidden fees"
										benefitTwo="Unlimited support & care"
										benefitThree="Discount on other services"
										buttonText="Create Account"
									/>
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
									<h2 className="h2">1. Optimized WordPress Hosting</h2>
									<p className="text__body">
										Enough with shared hosting. Get a 100% private server that
										is optimized for YOUR website. We provision a brand new SSD
										server for your website, install the most up to date
										technology including PHP 7.3, and install an SSL certificate
										to make everything secure. It's like going from that motel
										downtown to that 5-star hotel uptown.
									</p>
									<ul className="mt-3">
										<li className="text__body">
											<FontAwesomeIcon icon={faCheckCircle} /> Fully Managed
											Private, SSD Server
										</li>
										<li className="text__body">
											<FontAwesomeIcon icon={faCheckCircle} /> SSL Certificate
											Included
										</li>
										<li className="text__body">
											<FontAwesomeIcon icon={faCheckCircle} /> Daily,
											Multi-Location Backup
										</li>
										<li className="text__body">
											<FontAwesomeIcon icon={faCheckCircle} /> Optimized DNS &
											Traffic Monitoring
										</li>
										<li className="text__body">
											<FontAwesomeIcon icon={faCheckCircle} /> Cloud-based &
											Local Firewall
										</li>
									</ul>
									
									<h2 className="h2">2. Monthly WordPress Maintenance</h2>
									<p className="text__body">
										WordPress is a pain when it comes down to it. It does some
										things great - manage content, user permissions, and others.
										But month to month there is a lot to keep up with. Plugin
										updates, database clutter, spam comments, WordPress updates,
										and more. We keep your website performing 100%. You will
										never think about a plugin update again. Or whether or not
										your website is backed up. We monitor and take care of
										everything with our white glove service. Get a report of
										everything done every month.
									</p>
									<ul className="mt-3">
										<li className="text__body">
											<FontAwesomeIcon icon={faCheckCircle} /> WP & Plugin
											Updates Monthly
										</li>
										<li className="text__body">
											<FontAwesomeIcon icon={faCheckCircle} /> Instant Backup
											Restore
										</li>
										<li className="text__body">
											<FontAwesomeIcon icon={faCheckCircle} /> Database Cleaning
											& Optimization
										</li>
										<li className="text__body">
											<FontAwesomeIcon icon={faCheckCircle} /> Performance
											Monitoring
										</li>
										<li className="text__body">
											<FontAwesomeIcon icon={faCheckCircle} /> Malware &
											Security Monitoring
										</li>
										<li className="text__body">
											<FontAwesomeIcon icon={faCheckCircle} /> Broken Link
											Monitoring
										</li>
									</ul>
									
									<h2 className="h2">3. Unlimited WP Support Tasks</h2>
									<p className="text__body">
										Websites are not static. They are living, breathing things
										that constantly change with your business. If you need text,
										links, or images updated throughout the month our team will
										take care of it at no extra charge to you. Unlimited support
										tasks are included in your WP CARE plan. Simple submit a
										support ticket or email and it will be done, typically
										within 24 hours.
									</p>
									<ul className="mt-3">
										<li className="text__body">
											<FontAwesomeIcon icon={faCheckCircle} /> Adding, editing,
											deleting or adjusting text.
										</li>
										<li className="text__body">
											<FontAwesomeIcon icon={faCheckCircle} /> Updating business
											contact info like phone numbers.
										</li>
										<li className="text__body">
											<FontAwesomeIcon icon={faCheckCircle} /> Switching,
											adding, or deleting images.
										</li>
										<li className="text__body">
											<FontAwesomeIcon icon={faCheckCircle} /> Adding, fixing,
											deleting links.
										</li>
									</ul>
									
									<h2 className="h2">Plus...</h2>
									<h3 className="h3">Get discounts on custom development</h3>
									<p className="text__body">
										Want something new built? Need something big like a new page
										added to your website? Thinking about a custom plugin for
										your business? Our team can help you build just about
										anything. If you are a WP CARE client you receive 50% off
										custom development for your website.
									</p>
									<ul className="mt-3">
										<li className="text__body">
											<FontAwesomeIcon icon={faCheckCircle} /> PHP & Javascript Development
										</li>
										<li className="text__body">
											<FontAwesomeIcon icon={faCheckCircle} /> Database Architecture
										</li>
										<li className="text__body">
											<FontAwesomeIcon icon={faCheckCircle} /> Custom WordPress plugins
										</li>
										<li className="text__body">
											<FontAwesomeIcon icon={faCheckCircle} /> 3rd Party API Integrations
										</li>
									</ul>
									<div className="mt-4">
										<Button text="Start Care Service" link="https://possibleweb.spp.io/order/DYG3OV" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}
