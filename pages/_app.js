import '../styles/globals.css'
import Layout from "../components/layout";
import {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        AOS.init({
            once: true,
        });
    });
    return (
        <Layout>
            <Head>
                <link rel="shortcut icon" href="https://isdb-bisew.org/img/logo.png" type="image/x-icon" />
            </Head>
            <Component {...pageProps} />
        </Layout>)
}

export default MyApp
