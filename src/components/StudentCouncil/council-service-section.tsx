"use client";
import React, {useState} from "react";
import Image from "next/image";

const menuItems = [
    {
        title: "Leadership Workshops",
        content:
            "These workshops aim to nurture leadership qualities in students by engaging them in activities such as group discussions, role-playing, and problem-solving scenarios. Participants will learn how to take initiative, make decisions under pressure, and effectively guide teams toward achieving common goals. The program also instills a sense of responsibility and accountability, preparing students to lead not only within the Student Union but also in their personal and professional lives.",
        image: "/council1.jpg",
    },
    {
        title: "Event Planning Training",
        content:
            "This program helps students master the art of organizing and managing events. It includes practical sessions on budgeting, scheduling, logistics, and coordinating with various stakeholders. By planning real-world events such as cultural festivals, charity drives, or academic conferences, students will enhance their organizational and time-management skills. This experience sharpens their ability to handle challenges and ensures that they can manage complex projects efficiently.",
        image: "/council2.jpg",
    },
    {
        title: "Social Networking Events",
        content:
            "These events are designed to improve students' interpersonal skills and foster meaningful connections among peers. Activities may include networking dinners, group outings, and interactive sessions with alumni or industry professionals. These opportunities encourage students to build strong relationships, exchange ideas, and work collaboratively, which are essential traits for future endeavors in academia or the workplace.",
        image: "/council3.jpg",
    },
    {
        title: "Talent Showcases",
        content:
            "Talent showcases are platforms where students can display their unique skills, whether academic, artistic, or athletic. Events like talent nights, exhibitions, or competitions allow students to gain recognition for their abilities. These programs not only boost self-confidence but also encourage students to explore and develop their personal interests further.",
        image: "/council1.jpg",
    },
    {
        title: "University Guidance Programs",
        content:
            "This program provides tailored support to students aspiring to enter prestigious universities, particularly in North America. It includes workshops on crafting compelling application essays, preparing for interviews, and building impressive portfolios. Mentorship from alumni who have successfully navigated the admission process can offer invaluable insights. Participation in the Student Union and these programs enhances students' resumes and strengthens their university applications.",
        image: "/council2.jpg",
    },
];

const ServiceComponent = () => {
    const [activeItem, setActiveItem] = useState<number>(0);
    const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        parentName: '',
        email: '',
        phone: '',
        course: '',
        education: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/application', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setFormData({
                    firstName: '', lastName: '', parentName: '',
                    email: '', phone: '', course: '', education: ''
                });
                togglePopup();
            } else {
                // alert('Failed to submit application');
            }
        } catch (error) {
            console.log(error);
            alert('Error submitting application');
        }
    };

    return (
        <div className="relative z-20">
            <div className="flex flex-col md:flex-row min-h-screen gap-8 p-6 z-20">
                {/* Sidebar */}
                <div className="w-full md:w-1/5 p-4 h-0 md:h-[400px] flex flex-col">
                    <ul className="space-y-2">
                        {menuItems.map((item, index) => (
                            <li
                                key={index}
                                className={`cursor-pointer p-4 transition-all text-center font-medium ${
                                    activeItem === index
                                        ? "bg-green-700 text-white shadow-lg transform scale-105"
                                        : "bg-gray-300 hover:bg-green-200 hover:shadow-md hover:transform hover:scale-105 text-gray-800"
                                }`}
                                onClick={() => setActiveItem(index)}
                            >
                                {item.title}
                            </li>
                        ))}
                    </ul>

                    {/* Apply Now Button */}
                    <button
                        onClick={togglePopup}
                        className="mt-4 p-4 bg-green-700 text-white rounded-md shadow-lg hover:bg-green-600 transition-all"
                    >
                        Apply Now
                    </button>
                    {isPopupOpen && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
                             onClick={togglePopup}>
                            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md h-3/4 overflow-auto"
                                 onClick={(e) => e.stopPropagation()}>
                                <h2 className="text-2xl font-bold text-green-900 mb-4">Application Form</h2>
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-4">
                                        <label className="block text-gray-700">First Name</label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            name="firstName"
                                            placeholder="Enter your first name"
                                            className="w-full border rounded-lg px-3 py-2"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700">Last Name</label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            placeholder="Enter your last name"
                                            className="w-full border rounded-lg px-3 py-2"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700">Parent&#39;s Name</label>
                                        <input
                                            type="text"
                                            name="parentName"
                                            placeholder="Enter your parent's name"
                                            className="w-full border rounded-lg px-3 py-2"
                                            value={formData.parentName}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Enter your email"
                                            className="w-full border rounded-lg px-3 py-2"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700">Phone Number</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            placeholder="Enter your phone number"
                                            className="w-full border rounded-lg px-3 py-2"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700">Course</label>
                                        <input
                                            type="text"
                                            name="course"
                                            placeholder="Enter your course"
                                            className="w-full border rounded-lg px-3 py-2"
                                            value={formData.course}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700">Educational Background</label>
                                        <textarea
                                            className="w-full border rounded-lg px-3 py-2"
                                            rows={3}
                                            name="education"
                                            placeholder="Enter your educational background"
                                            value={formData.education}
                                            onChange={handleChange}
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
                </div>

                {/* Content Area */}
                <div className="w-full md:w-3/4 shadow-xl rounded-xl mt-4 bg-white">
                    <h3 className="text-2xl font-extrabold text-white border-b-4 bg-green-700 p-2">
                        {menuItems[activeItem].title}
                    </h3>
                    {/* Dynamic Image */}
                    <div className="relative h-80 sm:h-64 md:h-72 lg:h-80 mb-6 overflow-hidden rounded-xl shadow-lg">
                        <Image
                            src={menuItems[activeItem].image}
                            alt={menuItems[activeItem].title}
                            layout="fill"
                            objectFit="cover"
                            className="transform transition-transform duration-500 hover:scale-110"
                        />
                    </div>

                    {/* Dynamic Title and Content */}
                    <div className="p-4">
                        <p className="mt-6 text-gray-600 text-lg leading-8">
                            {menuItems[activeItem].content}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceComponent;
