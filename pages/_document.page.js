import { ServerStyleSheet } from "styled-components";
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(
      (App) => (props) => sheet.collectStyles(<App {...props} />),
    );

    const styleTags = sheet.getStyleElement();

    return { ...page, styleTags };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta name="theme-color" content="#46D381" />
          <link rel="icon" href="/favicon.png" />
          {this.props.styleTags}
          {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-QYGWWVMTQ5"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date()); gtag('config', 'G-QYGWWVMTQ5');`,
            }}
          />
        </Head>
        <body
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
            overflowX: "hidden",
          }}
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
