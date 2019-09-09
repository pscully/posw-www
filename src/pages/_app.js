import React from "react";
import App from "next/app";
import Nav from "../components/navigation/nav";
import Footer from "../components/footer/footer";

class Layout extends React.Component {
	render() {
		const { children } = this.props;
		return (
      <>
			<div id="outer-container">
				<div id="page-wrap">
					<Nav />
					<div id="particles-js">
							{children}
					</div>
				</div>
			</div>
      <Footer />
	  <style jsx>
		  {`
			#outer-container {
				height: 100%
			}

			#page-wrap {
				height: 100%
			}
		  `}
	  </style>
      </>
		);
	}
}

export default class MyApp extends App {
	render() {
		const { Component, pageProps } = this.props;
		return (
			<Layout>
				<Component {...pageProps} />
			</Layout>
		);
	}
}
