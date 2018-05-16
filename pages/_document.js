import Document, { Head, Main, NextScript } from "next/document"

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html>
        <Head>
          <style
          >{`body,html { margin: 0 ; padding: 0; font-family: 'Open Sans', sans-serif;} *{box-sizing: border-box;} /* custom! */`}</style>
          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700"
            rel="stylesheet"
          />
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
