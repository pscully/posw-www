import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta name="csrf-token" content="" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        {/* <script src="https://paperform.co/__embed"></script> */}
      </Html>
    );
  }
}

export default MyDocument;
