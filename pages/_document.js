import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
      <Head />
      <link rel="icon" href="/img/favicon.png" type="image/x-icon" />
      <link rel="stylesheet" href="/css/style.css" />
      <script src="js/jquery.js"></script>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
    )
  }
}

export default MyDocument