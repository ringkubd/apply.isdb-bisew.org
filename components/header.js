import React from "react";

export default function Header({title}){
    return (
        <header className="bg-white shadow" data-aos="slide-right" data-aos-delay={100} data-aos-duration={500}>
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h1 className="sm:text-3xl text-lg font-bold text-gray-900">{title}</h1>
            </div>
        </header>
    )
}