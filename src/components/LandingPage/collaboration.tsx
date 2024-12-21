"use client";

import { motion } from "framer-motion";
import { University } from "lucide-react"; // lucide-react icon
import Link from "next/link";
import { useState } from "react";

const Collaboration = () => {
    // Array to store university information
    const universities = [
        { name: "Western University", country: "Canada" },
        { name: "University of Waterloo", country: "Canada" },
        { name: "University of Toronto", country: "Canada" },
        { name: "McGill University", country: "Canada" },
        { name: "Queen's University", country: "Canada" },
        { name: "University of British Columbia", country: "Canada" },
        { name: "University of Alberta", country: "Canada" },
        { name: "University of Montreal", country: "Canada" },
        { name: "York University", country: "Canada" },
        { name: "Simon Fraser University", country: "Canada" },
    ];

    // State to track the current scroll position
    const [scrollIndex, setScrollIndex] = useState(0);
    const maxScrollIndex = universities.length; // To display 4 universities at a time

    // Function to handle scrolling to the next set of universities
    const scrollRight = () => {
        if (scrollIndex < maxScrollIndex) {
            setScrollIndex(scrollIndex + 1);
        }
    };

    // Function to handle scrolling to the previous set of universities
    const scrollLeft = () => {
        if (scrollIndex > 0) {
            setScrollIndex(scrollIndex - 1);
        }
    };

    return (
        <section className="bg-gray-100 py-16">
            <div className="container mx-auto px-6 text-center">
                {/* Heading */}
                <h2 className="text-3xl font-bold text-green-900 mb-4">
                    Our Collaboration with Universities and Acceptances
                </h2>


                {/* Scrollable Universities Banner */}
                <div className="relative w-full md:w-2/3 mx-auto flex justify-center">
                    
                        {/* Left Arrow */}
                        <button
                            onClick={scrollLeft}
                            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-green-900 text-white p-2 rounded-full shadow-md z-10"
                        >
                            &lt;
                        </button>
                        <div className="flex overflow-x-hidden justify-center w-2/3">
                        {/* University Cards */}
                        <motion.div
                            className="flex transition-all duration-300"
                            initial={{ x: 0 }}
                            animate={{ x: -scrollIndex * 260 }} // Adjusted for card width
                        >
                            {universities.map((university, index) => (
                        <div
                            key={index}
                            className="bg-white p-4 rounded-lg shadow-lg text-center mx-4 w-48 sm:w-60 md:w-60 lg:w-60 xl:w-60 h-48"
                        >
                            <University className="w-16 h-16 text-green-900 mb-4 mx-auto" />
                            <h3 className="text-xl font-semibold text-green-900 mb-2">
                            {university.name}
                        </h3>
                        <p className="text-gray-600">{university.country}</p>
                        </div>
                    ))}
                    {/* <div
                            key={0}
                            className="bg-white p-4 rounded-lg shadow-lg text-center mx-4 w-48 sm:w-60 md:w-60 lg:w-60 xl:w-60 h-48"
                        >
                            <University className="w-16 h-16 text-green-900 mb-4 mx-auto" />
                            <h3 className="text-xl font-semibold text-green-900 mb-2">
                            {universities[0].name}
                        </h3>
                        <p className="text-gray-600">{universities[0].country}</p>
                        </div> */}
                    </motion.div>

                        </div>
                        {/* Right Arrow */}
                        <button
                            onClick={scrollRight}
                            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-green-900 text-white p-2 rounded-full shadow-md z-10"
                        >
                            &gt;
                        </button>
                    
                </div>

                {/* Explore More Button */}
                <div className="flex justify-center mt-8">
                    <Link href="/about">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 bg-green-900 text-white font-semibold rounded-lg shadow-md transform transition-all duration-200 hover:bg-green-700"
                        >
                            Explore More
                        </motion.button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Collaboration;
