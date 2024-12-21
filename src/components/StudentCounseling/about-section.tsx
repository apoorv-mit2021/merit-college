"use client";

import Image from "next/image";

const CounselingAboutSection = () => {
    return (
        <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-7">
                        <span className="text-green-600 font-semibold uppercase tracking-wide">
                            Our Mission
                        </span>
                        <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mt-4 leading-tight">
                            Empowering Students Through Guidance
                        </h2>
                        <p className="text-gray-700 mt-6 text-lg leading-relaxed">
                            Our student counseling services focus on fostering academic excellence, emotional
                            well-being, and career clarity. We believe that every student deserves personalized
                            support to overcome challenges and achieve their full potential.
                        </p>
                        <p className="text-gray-700 mt-4 text-lg leading-relaxed">
                            Through expert counselors, interactive workshops, and holistic programs, we help
                            students navigate their personal and professional journeys with confidence.
                        </p>
                        <button className="mt-6 bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg shadow-md transition duration-300">
                            Learn More About Us
                        </button>
                    </div>

                    <div className="lg:col-span-5">
                        <div className="relative">
                            <div className="absolute -top-6 -left-6 w-full h-full bg-green-200 rounded-2xl transform rotate-2 -z-10"></div>
                            <Image
                                src="/counseling-about.jpg"
                                alt="Counselor with student"
                                width={600}
                                height={600}
                                className="rounded-2xl shadow-lg transform hover:scale-105 transition duration-300"
                                priority
                            />
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-6 mt-16">
                    {[
                        {value: "1,000+", label: "Students Guided"},
                        {value: "10+", label: "Years of Experience"},
                        {value: "20+", label: "Certified Counselors"},
                        {value: "50+", label: "Workshops Conducted"},
                    ].map((start, index) => (
                        <div
                            key={index}
                            className="bg-white border border-gray-200 rounded-lg p-6 text-center shadow-md w-1/2 sm:w-auto flex-grow"
                        >
                            <h3 className="text-4xl font-bold text-green-600">{start.value}</h3>
                            <p className="text-gray-600 mt-2">{start.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CounselingAboutSection;
