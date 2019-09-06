// index.js
import React from "react";
import Link from "next/link";
import groq from "groq";
import client from "../client";
import Head from "next/head";
import Form from "../components/form/form";
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
					<div className="w-full overflow-hidden py-8 mt-8 bg-white rounded-lg shadow mx-4">
						<div className="mx-4">
							<h1 className="h1">Some Thoughts on WordPress & Marketing</h1>
							<ul>
								{posts.map(
									({ _id, title = "", slug = "", _updatedAt = "" }) =>
										slug && (
											<li key={_id} className="my-6">
												<Link href="/[slug]" as={`/${slug.current}`}>
													<a className="text-2xl underline">{title}</a>
												</Link>{" "}
											</li>
										)
								)}
							</ul>
						</div>
					</div>
					<div className="container flex justify-between flex-wrap overflow-hidden mx-auto mb-4">
						<div className="w-full md:w-7/12 overflow-hidden py-8 bg-white rounded-lg shadow mx-4 mt-4">
							<div className="mx-8">
								<span className="text-2xl pt-4">
									Get our internal SEO notes. What we are learning, testing,
									and optimizing. Apply our notes to your business and see results.
								</span>

							</div>
						</div>
						<div className="w-full md:w-4/12 overflow-hidden py-8 bg-white rounded-lg shadow mx-4 mt-4">
							<div className="flex justify-center">
								<Form />
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
	);
};

Share.getInitialProps = async () => ({
	posts: await client.fetch(groq`
      *[_type == "post"]|order(publishedAt desc)
    `)
});

export default Share;
