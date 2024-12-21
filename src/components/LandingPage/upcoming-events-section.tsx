"use client";

import { useState } from "react";
import { PlusCircle, MinusCircle } from "lucide-react";

const eventsData = [
    {
        id: 1,
        title: "Working with the greater than/less than equations",
        date: "12-12-2024",
        time: "7:00 PM",
        location: "North York",
        image: "/campus-life-1.jpg", // Replace with your image path in public folder
        description:
            "This is the first item's accordion body. It is shown by default until the collapse plugin adds the appropriate classes to style each element. These classes control the appearance as well as showing and hiding via CSS transitions.",
    },
    {
        id: 2,
        title: "Introduction to Advanced Calculus",
        date: "15-12-2024",
        time: "6:30 PM",
        location: "Downtown Toronto",
        image: "/campus-life-2.jpg", // Replace with your image path in public folder
        description:
            "Learn the fundamentals of advanced calculus, explore its applications, and understand its significance in various fields.",
    },
    {
        id: 3,
        title: "Interactive Physics Workshop",
        date: "20-12-2024",
        time: "5:00 PM",
        location: "Vancouver",
        image: "/campus-life-3.jpg", // Replace with your image path in public folder
        description:
            "Join us for an interactive physics workshop focusing on real-world applications and hands-on experiments to enhance your learning experience.",
    },
];

const UpcomingEvents = () => {
    const [activeEvent, setActiveEvent] = useState<number | null>(null);

    const toggleEvent = (id: number) => {
        setActiveEvent(activeEvent === id ? null : id);
    };

    return (
        <section className="bg-gray-50 py-8 justify-center mx-auto max-w-[60vw]">   
            <div className="container mx-auto px-6">
                {/* Heading */}
                <h2 className="text-3xl font-bold text-green-900 mb-4 text-center">
                    Upcoming Event
                </h2>

                {/* Event Cards */}
                <div className="space-y-6">
                    {eventsData.map((event) => (
                        <div
                            key={event.id}
                            className={`border border-green-900 rounded-lg shadow-md p-3 ${
                                activeEvent === event.id ? "bg-green-50" : "bg-white"
                            }`}
                        >
                            {/* Header */}
                            <div className="flex items-center">
                                {/* Image */}
                                <img
                                    src={event.image}
                                    alt={event.title}
                                    className="w-24 h-24 rounded-md mr-4 object-cover"
                                />
                                {/* Content */}
                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold text-green-900">
                                        {event.title}
                                    </h3>
                                    <div className="flex items-center text-gray-600 space-x-4">
                                        <p>{event.date}</p>
                                        <p>{event.time}</p>
                                        <p>{event.location}</p>
                                    </div>
                                </div>
                                {/* Expand/Collapse Icon */}
                                <button onClick={() => toggleEvent(event.id)}>
                                    {activeEvent === event.id ? (
                                        <MinusCircle className="w-6 h-6 text-green-900" />
                                    ) : (
                                        <PlusCircle className="w-6 h-6 text-green-900" />
                                    )}
                                </button>
                            </div>
                            {/* Collapsible Content */}
                            {activeEvent === event.id && (
                                <div className="mt-4 text-gray-700">
                                    <p>{event.description}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UpcomingEvents;
