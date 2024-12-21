"use client"
import { useState } from "react";
import { GraduationCap, Home, School, QrCode } from "lucide-react";

const FeatureSection = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const features = [
        {
            icon: <Home className="text-white w-10 h-10" />,
            title: "SSAT/SAT/AP/AEP",
            description: "College Board Audited Official AP",
            link: "#",
        },
        {
            icon: <School className="text-white w-10 h-10" />,
            title: "Expert Instructors",
            description: "CB® AP Graders",
            link: "#",
        },
        {
            icon: <GraduationCap className="text-white w-10 h-10" />,
            title: "Application Consulting",
            description: "Customized Service",
            link: "#",
        },
        {
            icon: <QrCode className="text-white w-10 h-10" />,
            title: "Connect On WeChat",
            description: "",
            link: "wechat",
        },
    ];

    const handleButtonClick = (link:string) => {
        if (link === "wechat") {
            setModalOpen(true);
        } else {
            window.location.href = link;
        }
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <section className="bg-green-900 text-white py-10">
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center bg-green-800 rounded-lg shadow-lg p-6 hover:scale-105 transition-transform duration-300 text-center"
                    >
                        <div className="mb-4">{feature.icon}</div>
                        <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                        {feature.description && (
                            <p className="text-sm mb-4">{feature.description}</p>
                        )}
                        <button
                            onClick={() => handleButtonClick(feature.link)}
                            className="bg-green-700 text-green-200 hover:bg-green-600 hover:text-white px-4 py-2 rounded-lg font-semibold"
                        >
                            Learn More
                        </button>
                    </div>
                ))}
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg shadow-lg p-6 relative max-w-sm mx-auto">
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 font-bold text-xl"
                        >
                            &times;
                        </button>
                        <h3 className="text-lg font-bold text-center mb-4">WeChat QR Code</h3>
                        <img
                            src="/qr.jpg"
                            alt="WeChat QR Code"
                            className="w-full h-auto"
                        />
                    </div>
                </div>
            )}
        </section>
    );
};

export default FeatureSection;
