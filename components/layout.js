import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({ children, title }){
    return (
        <div className="mx-auto md:px-4 min-h-screen">
            <Navbar />
            <main data-aos="fade-up" data-aos-duration={800} data-aos-delay={400}>{ children }</main>
            <Footer />
        </div>
    )
}