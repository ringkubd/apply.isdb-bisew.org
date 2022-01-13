import Head from 'next/head'
import Header from "../components/header";
import Autocomplete from "../components/autocomplete";
import {useRef, useState} from "react";
import useSWR from "swr";
import {BiAlarm} from "react-icons/bi";
import Link from 'next/link'
import Img from 'next/image'


export default function Home() {
    const [ selectValue, setSelectValue ] = useState("");
    const [candidateData, setCandidateData] =  useState({});
    const present_educational_engagement = useRef();
    var disable = false;

    const onChange = (v) => {
        setSelectValue(v)
    }

    let { data, error } = useSWR('/api/major', url => fetch(url).then(r => r.json()))
    if (error) console.log(error)
    if (!data) data = []

    const formOnChange = (e) => {
        setCandidateData({
            [e.target.name]: e.target.value
        })
        console.log(e.target.name)
        if (e.target.name === "last_degree" && e.target.value === "kamil_masters"){
            disable = true
        }
    }


    return (
        <div className="max-w-7xl mx-auto">
            <Head>
                <title>{ `Apply IsDB-BISEW IT Scholarship` }</title>
            </Head>
            <Header title={`IsDB-BISEW IT Scholarship Programme`} />
            <div className="w-full py-2 shadow min-h-max text-center rounded-lg">
                <h1 className="text-4xl">Round - 52</h1>
                <h2 className="flex items-center justify-center">
                    <BiAlarm className="animate-ping text-red-500 text-xl" /> Application Deadline: <span className="text-red-700 ml-2"> 28-February-2022</span>
                </h2>
            </div>
            <div className="w-full shadow p-2 my-2 overflow-auto rounded-lg">
                <span className="text-md font-bold">কোর্স পরিচিতিঃ </span> IsDB-BISEW বিগত ছয় বছর যাবত ভোকেশনাল স্কলারশিপ এর অধীনে বিভিন্ন ট্রেডে ছয় মাস (৬) মেয়াদী কারিগরী শিক্ষা প্রদান করে আসছে। আর্থিক কারণে পড়াশোনা বন্ধ হয়ে যাওয়া
                দরিদ্র মুসলিম যুব সমাজকে দক্ষ ও পেশাদার পর্যায়ে উন্নীত করাই এই প্রোগাম এর একমাত্র লক্ষ্য ও উদ্দেশ্য।
                বর্তমানে রাউন্ড-১ থেকে রাউন্ড-২১ পর্যন্ত ১২৭৫ জন এই স্কলারশিপ এর আওতায় ট্রেনিং সম্পন্ন করে দেশ ও দেশের বাহিরে ১৪০টিরও বেশী প্রতিষ্ঠানে কর্মরত আছে।
            </div>
            <div className="w-full text-2xl font-bold shadow p-4 text-center">
                <h2 className="text-center font-bold md:text-4xl text-2xl text-green-700">Online Application Form</h2>
            </div>
            <div className="w-full text-2xl font-bold shadow p-4 text-center bg-amber-400">
                <Link href="/bkash_instruction">
                    <a className="ml-3 rounded-2xl flex items-center justify-center">
                        Application Fee 100 Taka <Img className="block sm:inline-block mb-0 pb-0" height={50} width={50} src="/BKash-Icon2-Logo.wine.svg" /> Payment Instruction
                    </a>
                </Link>
            </div>
            <div className="bg-gray-50 mx-auto max-w-7xl py-10 px-12 lg:px-24 rounded shadow-xl mb-24">
                <form>
                    <div className="-mx-3 md:flex mb-6">
                        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                            <label htmlFor="name" className="uppercase tracking-wide text-black text-xs font-bold mb-2">Candidate Name<sup className="text-sm text-red-500">*</sup></label>
                            <input type="text" id="name" required className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"/>
                        </div>
                        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                            <label htmlFor="father_name" className="uppercase tracking-wide text-black text-xs font-bold mb-2">Father's Name<sup className="text-sm text-red-500">*</sup></label>
                            <input type="text" id="father_name" required className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"/>
                        </div>
                        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                            <label htmlFor="dob" className="uppercase tracking-wide text-black text-xs font-bold mb-2">Date of Birth<sup className="text-sm text-red-500">*</sup></label>
                            <input type="date" required id="dob" className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"/>
                        </div>
                    </div>
                    <div className="-mx-3 md:flex mb-6">
                        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                            <label htmlFor="gender" className="uppercase tracking-wide text-black text-xs font-bold mb-2">Gender<sup className="text-sm text-red-500">*</sup></label>
                            <select name="gender" required id="gender" className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3">
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                            <label htmlFor="marital_status" className="uppercase tracking-wide text-black text-xs font-bold mb-2">Marital Status<sup className="text-sm text-red-500">*</sup></label>
                            <select name="marital_status" required id="marital_status" className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3">
                                <option value="single">Single</option>
                                <option value="married">Married</option>
                                <option value="widow">Widow</option>
                            </select>
                        </div>
                        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                            <label htmlFor="religion" className="uppercase tracking-wide text-black text-xs font-bold mb-2">Religion<sup className="text-sm text-red-500">*</sup></label>
                            <select name="religion" required id="religion" className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3">
                                <option value="muslim">Islam</option>
                                <option value="hinduism">Other</option>

                            </select>
                        </div>
                    </div>
                    <div className="-mx-3 md:flex mb-6">
                        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                            <label htmlFor="nid" className="uppercase tracking-wide text-black text-xs font-bold mb-2">NID Number</label>
                            <input type="number" id="nid" className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"/>
                        </div>
                        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                            <label htmlFor="mobile" className="uppercase tracking-wide text-black text-xs font-bold mb-2">Mobile Number<sup className="text-sm text-red-500">*</sup></label>
                            <input type="tel" name="mobile" required id="mobile" className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" />
                        </div>
                        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                            <label htmlFor="email" className="uppercase tracking-wide text-black text-xs font-bold mb-2">Email</label>
                            <input type="email" id="email" className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"/>
                        </div>

                    </div>
                    <div className="-mx-3 md:flex mb-6">
                        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                            <label htmlFor="last_degree" className="uppercase tracking-wide text-black text-xs font-bold mb-2">Last Degree<sup className="text-sm text-red-500">*</sup></label>
                            <select onChange={formOnChange} name="last_degree" required id="last_degree" className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3">
                                <option value="honours_fazil_degree_pass">Honours / Fazil / Degree Pass</option>
                                <option value="kamil_masters">Master's / Kamil</option>
                                <option value="4 Year Diploma">4 Year Diploma</option>
                            </select>
                        </div>
                        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                            <label htmlFor="subject" className="uppercase tracking-wide text-black text-xs font-bold mb-2">Subject<sup className="text-sm text-red-500">*</sup></label>
                            <Autocomplete options={data} onChange={onChange} value={selectValue}/>
                        </div>
                        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                            <label htmlFor="passing_year" className="uppercase tracking-wide text-black text-xs font-bold mb-2">Passing Year<sup className="text-sm text-red-500">*</sup></label>
                            <input type="number" name="passing_year" required id="passing_year" className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" />
                        </div>
                    </div>
                    {/*TODO*/}
                    <div className="-mx-3 md:flex mb-6">
                        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                            <label htmlFor="present_educational_engagement" className="uppercase tracking-wide text-black text-xs font-bold mb-2">Present Educational Engagement<sup className="text-sm text-red-500">*</sup></label>
                            <select disabled={disable} ref={present_educational_engagement} name="present_educational_engagement" id="present_educational_engagement" className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3">
                                <option value="master">Masters 1st year</option>
                                <option value="bachelor">Masters 2nd year</option>
                                <option value="not_applicable">Kamil 1st year</option>
                                <option value="not_applicable">Kamil 2nd year</option>
                                <option value="not_applicable">BSc Engineering (For 4-Years Diploma holder)</option>
                            </select>
                        </div>
                        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                            <label htmlFor="prefer_training_city" className="uppercase tracking-wide text-black text-xs font-bold mb-2">Prefer Training City<sup className="text-sm text-red-500">*</sup></label>
                            <select name="prefer_training_city" id="prefer_training_city"  required className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3">
                                <option value="dhaka">Dhaka</option>
                                <option value="chattogram">Chattogram</option>
                            </select>
                        </div>
                        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                            <label htmlFor="photo" className="uppercase tracking-wide text-black text-xs font-bold mb-2">Photo<sup className="text-sm text-red-500">*</sup></label>
                            <input type="file" accept="image/*" id="photo" className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"/>
                        </div>
                    </div>
                    <div className="-mx-3 md:flex mb-6">
                        <div className="w-full mx-auto md:mt-6 px-3 mb-6 md:mb-0">
                            <input type="submit" value="Apply" className="w-full bg-cyan-900 text-white border border-gray-200 rounded py-3 px-4 mb-3"/>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
