import '../styles/globals.css'
import Layout from "../components/layout";
import {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        AOS.init({
            once: true,
        });
    });
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>)
}

export default MyApp
