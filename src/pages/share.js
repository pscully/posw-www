// index.js
import React from "react";
import Link from "next/link";
import groq from "groq";
import client from "../client";
import Head from "next/head";
import "../style.css";

const Share = props => {
	const { posts = [] } = props;
	return (
		<div id="page-wrap">
			<Head>
				<title>Our Latest Posts & Articles // Possible Web</title>
			</Head>

			<div>
				<div className="container flex flex-wrap overflow-hidden mx-auto">
					<div className="w-full overflow-hidden pt-8 my-12 lg:py-24 bg-white">
						<div>
							<h1>Welcome to a blog!</h1>
							{posts.map(
								({ _id, title = "", slug = "", _updatedAt = "" }) =>
									slug && (
										<li key={_id}>
											<Link href="/[slug]" as={`/${slug.current}`}>
												<a>{title}</a>
											</Link>{" "}
											({new Date(_updatedAt).toDateString()})
										</li>
									)
							)}
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
	);
};

Share.getInitialProps = async () => ({
	posts: await client.fetch(groq`
      *[_type == "post" && publishedAt < now()]|order(publishedAt desc)
    `)
});

export default Share;
