import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({ children, title }){
    return (
        <div className="mx-auto relative min-h-screen">
            <Navbar />
            <main className="overflow-auto md:mx-6 container" data-aos="fade-up" data-aos-duration={800} data-aos-delay={400}>{ children }</main>
            <Footer />
        </div>
    )
}