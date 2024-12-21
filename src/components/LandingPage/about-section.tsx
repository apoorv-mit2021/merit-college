"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const AboutSection = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };
    return (
        <section className="bg-gray-50 py-16 relative overflow-hidden">
            {/* Background Design */}
            <div className="absolute inset-0 bg-green-50 rounded-full -z-10 transform scale-150"></div>

            <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center space-y-10 lg:space-y-0 lg:space-x-10 px-6">
                {/* Left Section: Image */}
                <motion.div
                    className="w-full lg:w-2/5"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <Image
                        src="/about-image.jpg" // Replace with your image in the public folder
                        alt="Students collaborating in the library"
                        width={600}
                        height={400}
                        className="rounded-lg shadow-lg"
                    />
                </motion.div>

                {/* Right Section: Content */}
                <motion.div
                    className="w-full lg:w-1/2 text-center lg:text-left"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl font-bold text-green-900 mb-4">About Merit College</h2>
                    <p className="text-gray-700 mb-6">
                        Discover unparalleled opportunities to build your career with expert guidance, innovative programs, and a commitment to excellence in education. Your journey to success starts here.
                    </p>
                    <div className="grid grid-cols-2 gap-x-8 gap-y-4 mb-6">
                        {[
                            "Graduate Programs",
                            "Undergraduate",
                            "Doctoral Degrees",
                            "International Hubs",
                            "Alumni & Giving",
                            "Global Students",
                        ].map((item, index) => (
                            <p key={index} className="flex items-center text-gray-600">
                                <span className="text-green-600 font-bold mr-2">✔</span>
                                {item}
                            </p>
                        ))}
                    </div>
                    <div className="flex justify-center lg:justify-start space-x-8 mb-8">
                        {[
                            { value: "65+", label: "Years of Experience" },
                            { value: "30k+", label: "Global Students" },
                            { value: "52+", label: "Student Nationalities" },
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                className="text-center"
                                initial={{ scale: 0.8 }}
                                whileInView={{ scale: 1 }}
                                transition={{ duration: 0.4, delay: index * 0.2 }}
                            >
                                <h3 className="text-4xl font-bold text-green-900">{stat.value}</h3>
                                <p className="text-gray-600">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                    <div  className="flex justify-center lg:justify-start space-x-8 mb-8">
                    <motion.button
                        className="bg-green-900 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-700 transition"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={togglePopup}
                    >
                        Start your application →
                    </motion.button>
                    <motion.button
                        className="bg-green-900 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-700 transition"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Know more about us →
                    </motion.button>
                    </div>
                    
                </motion.div>
            </div>
                {isPopupOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" onClick={togglePopup}>
                        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md h-3/4 overflow-auto" onClick={(e)=>e.stopPropagation()}>
                            <h2 className="text-2xl font-bold text-green-900 mb-4">Application Form</h2>
                            <form>
                                <div className="mb-4">
                                    <label className="block text-gray-700">First Name</label>
                                    <input
                                        type="text"
                                        className="w-full border rounded-lg px-3 py-2"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700">Last Name</label>
                                    <input
                                        type="text"
                                        className="w-full border rounded-lg px-3 py-2"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700">Parent's Name</label>
                                    <input
                                        type="text"
                                        className="w-full border rounded-lg px-3 py-2"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700">Email</label>
                                    <input
                                        type="email"
                                        className="w-full border rounded-lg px-3 py-2"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700">Course</label>
                                    <input
                                        type="text"
                                        className="w-full border rounded-lg px-3 py-2"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700">Educational Background</label>
                                    <textarea
                                        className="w-full border rounded-lg px-3 py-2"
                                        rows={3}
                                        required
                                    ></textarea>
                                </div>
                                <div className="flex justify-end space-x-4">
                                    <button
                                        type="button"
                                        className="bg-gray-500 text-white px-4 py-2 rounded-lg"
                                        onClick={togglePopup} 
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="bg-green-900 text-white px-4 py-2 rounded-lg"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
        </section>
    );
};

export default AboutSection;
