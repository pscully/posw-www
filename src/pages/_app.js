import React from "react";
import App from "next/app";
import Nav from "../components/navigation/nav";
import Footer from "../components/footer/footer";
import Modal from "../components/modal/modal";

class Layout extends React.Component {
	render() {
		const { children } = this.props;
		return (
      <>
			<div id="outer-container">
				<div id="page-wrap">
					<Nav />
					<div>
							{children}
					</div>
				</div>
			</div>
      <Footer />
      <Modal />
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
