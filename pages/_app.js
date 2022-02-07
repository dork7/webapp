import "../styles/globals.css";
import Link from "next/link";
import { Button, ChakraProvider } from "@chakra-ui/react";
import NavBar from "../src/components/NavBar";
import Footer from "../src/components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}

export default MyApp;
