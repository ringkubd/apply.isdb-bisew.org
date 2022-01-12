import {FaHome} from "react-icons/fa";
import {FcAbout, FcFaq} from "react-icons/fc";
import Link from 'next/link'
import {VscIssues} from "react-icons/vsc";

export default function Footer(){
    return (
        <div className="w-full md:hidden">
            <section id="bottom-navigation" className="block fixed inset-x-0 bottom-0 z-10 bg-white shadow">
                <div id="tabs" className="flex justify-between">
                    <Link href="/">
                        <a className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
                            <FaHome className="inline-block text-2xl mb-1 text-[#05A0C8]" />
                            <span className="tab tab-home block text-xs">Home</span>
                        </a>
                    </Link>
                    <Link href="/faq" >
                        <a className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
                            <div>
                                <FcFaq className="inline-block text-2xl mb-1" />
                                <span className="tab tab-home block text-xs">FAQ</span>
                            </div>
                        </a>
                    </Link>
                    <Link href="/course_outcome" >
                        <a  className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
                            <div>
                                <VscIssues className="inline-block text-green-700 text-2xl mb-1" />
                                <span className="tab tab-home block text-xs">Course Outcome</span>
                            </div>
                        </a>
                    </Link>
                    <Link href="/about_us" >
                        <a className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
                            <div>
                                <FcAbout className="inline-block text-2xl mb-1" />
                                <span className="tab tab-home block text-xs">About Us</span>
                            </div>
                        </a>
                    </Link>
                </div>
            </section>
        </div>
    )
}