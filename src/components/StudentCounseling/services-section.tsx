"use client";

import { Heart, User, Calendar, MessageCircle } from "lucide-react";

const ServicesSection = () => {
    const features = [
        {
            icon: <Heart className="text-green-600 w-12 h-12 mb-4" />,
            title: "Emotional Support",
            description:
                "Offering emotional support through difficult times, focusing on mental wellness.",
        },
        {
            icon: <User className="text-green-600 w-12 h-12 mb-4" />,
            title: "Personalized Sessions",
            description:
                "One-on-one personalized counseling sessions tailored to individual needs.",
        },
        {
            icon: <Calendar className="text-green-600 w-12 h-12 mb-4" />,
            title: "Flexible Scheduling",
            description:
                "Flexible appointment scheduling to fit into your busy lifestyle.",
        },
        {
            icon: <MessageCircle className="text-green-600 w-12 h-12 mb-4" />,
            title: "Confidentiality",
            description:
                "All sessions are confidential to ensure trust and privacy in all discussions.",
        },
    ];

    return (
        <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-20">
            <div className="container mx-auto px-6 text-center">
                <h3 className="text-green-700 font-semibold uppercase tracking-wide">
                    Counseling Services
                </h3>
                <h2 className="text-4xl font-bold text-green-900 mt-2">
                    Services Designed for Your Mental Well-being
                </h2>
                <p className="text-gray-600 mt-4 text-lg">
                    Explore our specialized counseling services that cater to a variety of needs.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-lg rounded-lg p-8 text-center hover:shadow-2xl transition-shadow duration-300"
                        >
                            <div className="flex justify-center items-center mb-6">
                                {feature.icon}
                            </div>
                            <h4 className="text-xl font-semibold text-green-900 mb-2">
                                {feature.title}
                            </h4>
                            <p className="text-gray-700">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
