import Head from "next/head";
import Header from "../../components/header";

function AboutUs({abouts}){
    return (
        <div className="mx-auto">
            <Head>
                <title>About Us|Apply IsDB-BISEW IT Scholarship</title>
            </Head>
            <Header title="About IsDB-BISEW" />
            <div className="bg-gray-100 mx-auto max-w-6xl bg-white md:py-20 py-10 px-12 lg:px-24 shadow-xl mb-24">
                <ol>
                    {
                        abouts.length > 0 ?
                            abouts.map((about, index) => {
                                return <li key={index} className="list-item list-decimal">
                                    <h1 className="font-extrabold my-4">{about.title}</h1>
                                    <div className="text-gray-700" dangerouslySetInnerHTML={{__html: about.details}} ></div>
                                </li>
                            }): <li>About Us Not Found</li>

                    }

                </ol>
            </div>
        </div>

    )
}

AboutUs.getInitialProps = async ({ req }) => {
    const protocol = req?.headers['x-forwarded-proto'] || 'http'
    const baseUrl = req ? `${protocol}://${req.headers.host}` : ''
    const res = await fetch(`${baseUrl}/api/about`)
    const json = await res.json()
    return { abouts: json }
}
export default AboutUs;