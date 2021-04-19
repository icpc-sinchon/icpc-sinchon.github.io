import Document, { Html, Head, Main, NextScript } from 'next/document';
// Import styled components ServerStyleSheet
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
    static getInitialProps({ renderPage }) {
        // Step 1: Create an instance of ServerStyleSheet
        const sheet = new ServerStyleSheet();

        // Step 2: Retrieve styles from components in the page
        const page = renderPage((App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        );

        // Step 3: Extract the styles as <style> tags
        const styleTags = sheet.getStyleElement();

        // Step 4: Pass styleTags as a prop
        return { ...page, styleTags };
    }

    render() {
        return (
            <Html>
                <Head>
                    <meta name="theme-color" content="#009D3E" />
                    <link rel="icon" href="/favicon.png" />
                    {this.props.styleTags}
                    {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
                    <script async src="https://www.googletagmanager.com/gtag/js?id=G-QYGWWVMTQ5" />
                    <script dangerouslySetInnerHTML={{
                        __html: `window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date()); gtag('config', 'G-QYGWWVMTQ5');`
                    }} />
                </Head>
                <body style={{ maxWidth: `2000px`, margin: `0 auto`, overflowX: `hidden` }}>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}