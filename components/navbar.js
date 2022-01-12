import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import Link from 'next/link'
import useSWR from 'swr'
import Header from "./header";
import Img from 'next/image'

function Navbar() {
   const [isOpen, setIsOpen] = useState(false);

   const { data, error } = useSWR('/api/navigation', url => fetch(url).then(r => r.json()))

    if (error) return <div className="flex items-center justify-items-center">{error.message}</div>
    if (!data) return <div className="flex items-center justify-items-center">Loading....</div>

   return (
       <nav className="bg-[#05A0C8] sticky top-0 z-50 overflow-visible" data-aos="fade-down" data-aos-duration={700}>
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                   <div className="flex items-center">
                      <div className="flex-shrink-0">
                         <Img
                             width="50"
                             height="55"
                             className="h-12 w-12"
                             src="https://isdb-bisew.org/img/isdb-bisew.png"
                             alt="Workflow"
                             passHref
                         />
                      </div>
                      <div className="hidden md:block">
                         <div className="ml-10 flex items-baseline space-x-4">
                             {
                                 data.map((nav, index) => {
                                     return (
                                         <Link href={nav.path} key={index} data-aos="fade-up" passHref>
                                             <p className="hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium" data-aos-duration={500} data-aos-delay={100*index}>{nav.name}</p>
                                         </Link>
                                     )
                                 })
                             }

                         </div>
                      </div>
                   </div>
                   {/*<div className="-mr-2 flex md:hidden">*/}
                   {/*   <button*/}
                   {/*       onClick={() => setIsOpen(!isOpen)}*/}
                   {/*       type="button"*/}
                   {/*       className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"*/}
                   {/*       aria-controls="mobile-menu"*/}
                   {/*       aria-expanded="false"*/}
                   {/*   >*/}
                   {/*      <span className="sr-only">Open main menu</span>*/}
                   {/*      {!isOpen ? (*/}
                   {/*          <svg*/}
                   {/*              className="block h-6 w-6"*/}
                   {/*              xmlns="http://www.w3.org/2000/svg"*/}
                   {/*              fill="none"*/}
                   {/*              viewBox="0 0 24 24"*/}
                   {/*              stroke="currentColor"*/}
                   {/*              aria-hidden="true"*/}
                   {/*          >*/}
                   {/*             <path*/}
                   {/*                 strokeLinecap="round"*/}
                   {/*                 strokeLinejoin="round"*/}
                   {/*                 strokeWidth="2"*/}
                   {/*                 d="M4 6h16M4 12h16M4 18h16"*/}
                   {/*             />*/}
                   {/*          </svg>*/}
                   {/*      ) : (*/}
                   {/*          <svg*/}
                   {/*              className="block h-6 w-6"*/}
                   {/*              xmlns="http://www.w3.org/2000/svg"*/}
                   {/*              fill="none"*/}
                   {/*              viewBox="0 0 24 24"*/}
                   {/*              stroke="currentColor"*/}
                   {/*              aria-hidden="true"*/}
                   {/*          >*/}
                   {/*             <path*/}
                   {/*                 strokeLinecap="round"*/}
                   {/*                 strokeLinejoin="round"*/}
                   {/*                 strokeWidth="2"*/}
                   {/*                 d="M6 18L18 6M6 6l12 12"*/}
                   {/*             />*/}
                   {/*          </svg>*/}
                   {/*      )}*/}
                   {/*   </button>*/}
                   {/*</div>*/}
                </div>
             </div>

             <Transition
                 show={isOpen}
                 enter="transition ease-out duration-100 transform"
                 enterFrom="opacity-0 scale-95"
                 enterTo="opacity-100 scale-100"
                 leave="transition ease-in duration-75 transform"
                 leaveFrom="opacity-100 scale-100"
                 leaveTo="opacity-0 scale-95"
             >
                {() => (
                    <div className="md:hidden" id="mobile-menu">
                       <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">

                           {
                               data.map((nav, index) => {
                                   return (
                                       <Link href={nav.path} key={index} passHref>
                                           <p className="hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium">{nav.name}</p>
                                       </Link>
                                   )
                               })
                           }
                       </div>
                    </div>
                )}
             </Transition>
          </nav>
   );
}

export default Navbar;
