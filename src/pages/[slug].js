import groq from "groq";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import Head from "next/head"
import client from "../client";
import "../style.css";

function urlFor(source) {
	return imageUrlBuilder(client).image(source);
}

const Post = props => {
	const {
		title = "Missing title",
		name = "Missing name",
		categories,
		authorImage,
		body = []
	} = props;
	return (
		<div id="page-wrap">
			<Head>
				<title>{title} // Possible Web</title>
			</Head>
			<div>
				<div className="container flex flex-wrap overflow-hidden mx-auto">
					<div className="w-full overflow-hidden pt-8 my-12 lg:py-24 bg-white">
						<div className="mx-4">
							<article>
								<h1>{title}</h1>
								<span>By {name}</span>
								{categories && (
									<ul>
										Posted in
										{categories.map(category => (
											<li key={category}>{category}</li>
										))}
									</ul>
								)}
								{authorImage && (
									<div>
										<img
											src={urlFor(authorImage)
												.width(50)
												.url()}
										/>
									</div>
								)}
								<BlockContent
									blocks={body}
									imageOptions={{ w: 320, h: 240, fit: "max" }}
									{...client.config()}
								/>
							</article>
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

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "name": author->name,
  "categories": categories[]->title,
  "authorImage": author->image,
  body
}`;

Post.getInitialProps = async function(context) {
	const { slug = "" } = context.query;
	return await client.fetch(query, { slug });
};

export default Post;
