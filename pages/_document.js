import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Marcellus&family=Marcellus+SC&family=Marmelad&display=swap"
            rel="stylesheet"
          ></link>
          <link rel="icon" href="/logo.ico"></link>
          <script
            src="https://kit.fontawesome.com/926d0bf846.js"
            crossOrigin="anonymous"
            defer
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
