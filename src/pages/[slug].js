import React from "react";
import { NextSeo } from "next-seo";
import SiteLink from "../components/link/link";
import SideCard from "../components/sidecard/sideCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import groq from "groq";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import client from "../client";
import { ArticleJsonLd } from "next-seo";
import "../style.css";

library.add(fab);

const socialLinks = [
	{
		href: "https://www.twitter.com/pscully_",
		label: "twitter",
		icon: ["fab", "twitter"]
	},
	{
		href: "https://www.linkedin.com/in/pscully",
		label: "linkedin",
		icon: ["fab", "linkedin"]
	},
	{
		href: "https://www.instagram.com/pscully_",
		label: "instagram",
		icon: ["fab", "instagram"]
	}
].map(link => {
	link.key = `nav-link-${link.href}-${link.label}`;
	return link;
});

function urlFor(source) {
	return imageUrlBuilder(client).image(source);
}

function urlForCanonical(slug) {
	return `https://possibleweb.com/${slug}`;
}

const Post = props => {
	const {
		title = "Missing title",
		name = "Missing name",
		mainImage,
		authorImage,
		body = [],
		slug = {},
		_updatedAt = "",
		_createdAt = ""
	} = props;

	let canonical = urlForCanonical(slug.current);
	let featuredImage = urlFor(mainImage)
		.width(800)
		.url();
	console.log(featuredImage);
	let articleTitle = `${title} // Possible Web`;
	let articleDescription = `Hot off the press. Read our latest post: ${title}. Get in touch with our team to get more from your online presence.`;

	return (
		<>
			<NextSeo
				title={articleTitle}
				description={articleDescription}
				canonical={canonical}
				openGraph={{
					url: { canonical },
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
			<ArticleJsonLd
				url={canonical}
				title={title}
				images={[featuredImage]}
				datePublished={_createdAt}
				dateModified={_updatedAt}
				authorName={name}
				publisherName="Possible Web"
				publisherLogo="https://files.possibleweb.com/file/possibleweb-wordpress-seo.png"
				description={articleDescription}
			/>

			<div id="page-wrap">
				<div className="my-8">
					<div className="container flex flex-wrap-reverse overflow-hidden mx-auto">
						<div className="w-full md:w-3/12 overflow-hidden bg-white border shadow rounded-lg mx-2 px-2 my-2">
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
						<div className="w-full md:w-8/12 overflow-hidden bg-white border shadow rounded-lg mx-2 px-2 my-2">
							<div className="mx-4">
								<article className="blog__text mb-12">
									<h1>{title}</h1>
									<div className="featured-image">
										<img src={featuredImage} alt={title} title={title} />
									</div>
									<BlockContent
										blocks={body}
										imageOptions={{ fit: "max" }}
										{...client.config()}
									/>
									<div className="my-6">
										<SiteLink href="/share" text="Back to Blog" />
									</div>
								</article>
								<div className="border rounded-lg my-4 p-12">
									<div className="md:flex">
										{authorImage && (
											<div class="w-24 h-24 relative mb-4">
												<div class="group w-full h-full rounded-full overflow-hidden shadow-inner text-center bg-purple table cursor-pointer">
													<span class="hidden group-hover:table-cell text-white font-bold align-middle">
														PS
													</span>
													<img
														src={urlFor(authorImage).url()}
														alt="lovely avatar"
														class="object-cover object-center w-full h-full visible group-hover:hidden"
													/>
												</div>
											</div>
										)}
										<div className="md:ml-8">
											<div className="flex">
												<span className="text-2xl font-bold">By: {name}</span>
												<ul className="flex flex-row">
													{socialLinks.map(({ key, href, icon }) => (
														<li key={key} className="mx-2 mt-2">
															<a href={href} rel="nofollow noreferrer">
																<FontAwesomeIcon icon={icon} />
															</a>
														</li>
													))}
												</ul>
											</div>

											<p className="text__body">
												Founder of Scully Media, and creator of Possible Web.
												Patrick lives in Charlotte, NC with his wife, two sons,
												and pets.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "name": author->name,
  "authorImage": author->image,
  mainImage,
  body,
  slug,
  _createdAt,
  _updatedAt
}`;

Post.getInitialProps = async function(context) {
	const { slug = "" } = context.query;
	return await client.fetch(query, { slug });
};

export default Post;
