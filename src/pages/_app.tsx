import type { AppProps } from "next/app";

import { BackButton } from "../components/BackButton";
import { Container } from "../components/Layout";
import "../styles/global.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <main>
        <Component {...pageProps} />
      </main>
      <BackButton />
    </Container>
  );
}
export default MyApp;
