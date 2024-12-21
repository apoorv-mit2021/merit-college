"use client";

import { Leaf, Star, Handshake } from "lucide-react";
import {motion} from "framer-motion";
import Link from "next/link";
const WhySection = () => {
    const cards = [
        {
            icon: <Leaf className="w-12 h-12 text-green-900" />,
            title: "Bridge to Canada",
            description:
                "Our experience in working with new immigrant and international students to integrate into Canada and Canadian schools is unparalleled. We provide assistance through educational counselling, public seminars, and mentoring programs.",
        },
        {
            icon: <Star className="w-12 h-12 text-green-900" />,
            title: "Bridge to Future Success",
            description:
                "We assist students in obtaining good grades, individualized tutoring, and coaching services while developing leadership and communication skills essential for their future.",
        },
        {
            icon: <Handshake className="w-12 h-12 text-green-900" />,
            title: "Bridge to Global Citizens",
            description:
                "Merit provides students with a platform to develop their potential, foster service commitment, and grow into bridge builders and global citizens through extracurricular activities and mentorship.",
        },
    ];

    return (
        <section className="bg-gray-200 py-16">
            <div className="container mx-auto px-6">
                {/* Heading */}
                <h2 className="text-3xl font-bold text-green-900 mb-4 text-center">
                    WHY MERIT EDUCATION?
                </h2>
                <p className="text-center text-gray-700 mb-8">
                    Merit College offers a transformational, academic, and life-long journey for our
                    students. They choose us because we serve the following roles --
                </p>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="bg-green-50 p-6 rounded-lg shadow-md flex flex-col items-center text-center"
                        >
                            {/* Icon */}
                            <div className="mb-4">{card.icon}</div>
                            {/* Title */}
                            <h3 className="text-xl font-semibold text-green-900 mb-2">
                                {card.title}
                            </h3>
                            {/* Description */}
                            <p className="text-gray-700">{card.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-center mt-8">
            <Link href="#">
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-3 bg-green-900 text-white font-semibold rounded-lg shadow-md transform transition-all duration-200 hover:bg-green-700"
                    >
                        About Us
                    </motion.button>
                </Link>
            </div>
        </section>
    );
};

export default WhySection;
