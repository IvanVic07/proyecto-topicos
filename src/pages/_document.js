import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Carga del script de PayPal */}
          <script
            src="https://www.paypal.com/sdk/js?client-id=AQZU6T8L4jXyaOmqw0e6DTt4tik7_eg3M6gDaOaHJoXXlL5rmEwi6XLNi3Clt0ooxoEhdq2b_-ib0zS3&currency=USD"
            strategy="beforeInteractive"
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
