import Head from "next/head";
import Header from "../../components/header";

function Faq({faqs}){
    return (
        <div className="mx-auto">
            <Head>
                <title>FAQ|Apply IsDB-BISEW IT Scholarship</title>
            </Head>
            <Header title="FAQ for IT-Scholarship Program" />
            <div className="bg-gray-100 mx-auto max-w-6xl bg-white md:py-20 py-10 px-12 lg:px-24 shadow-xl mb-24">
                <ol>
                    {
                        faqs.length > 0 ?
                            faqs.map((faq, index) => {
                                return <li key={index} className="list-item list-decimal">
                                    <h1 className="font-extrabold my-4">{faq.title}</h1>
                                    <div className="text-gray-700" dangerouslySetInnerHTML={{__html: faq.details}} ></div>
                                </li>
                            }): <li>No Faq Found</li>

                    }

                </ol>
            </div>
        </div>
    )
}

Faq.getInitialProps = async ({ req }) => {
    const protocol = req?.headers['x-forwarded-proto'] || 'http'
    const baseUrl = req ? `${protocol}://${req.headers.host}` : ''
    const res = await fetch(`${baseUrl}/api/faq`)
    const json = await res.json()
    return { faqs: json }
}
export default Faq;