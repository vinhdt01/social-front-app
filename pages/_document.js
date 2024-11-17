// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Vinh Social</title>
        <meta name="description" content="Vinh social" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
