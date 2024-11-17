// pages/_app.js
import "../src/app/globals.css";
import RootLayout from "../src/app/layout";
import 'primeicons/primeicons.css';
import { PrimeReactProvider, PrimeReactContext } from "primereact/api";

function MyApp({ Component, pageProps }) {
  return (
    <RootLayout>
      <PrimeReactProvider>
        <Component {...pageProps} />
      </PrimeReactProvider>
    </RootLayout>
  );
}

export default MyApp;
