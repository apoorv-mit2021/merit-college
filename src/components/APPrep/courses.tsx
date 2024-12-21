// components/Courses/Courses.tsx
"use client";

import { motion } from "framer-motion";
import { Calculator, Code2, Book, Compass, BarChart, Atom, Brain, ClipboardCheck } from "lucide-react";

// const courses = [
//     {
//         title: "Network Engineering",
//         description: "Beginner Diploma In Basic English Grammar - Better Search",
//         icon: Briefcase,
//     },
//     {
//         title: "Product Designer",
//         description: "Join Our Training Course & Build Your Skill.",
//         icon: Pencil,
//     },
//     {
//         title: "Security Engineer",
//         description: "Join Our Training Course & Build Your Skill.",
//         icon: Shield,
//     },
//     {
//         title: "Digital Marketing",
//         description: "Completed Landing Page Design & Conversion Rate 2022",
//         icon: Monitor,
//     },
//     {
//         title: "Art & Design",
//         description: "Completed Landing Page Design & Conversion Rate 2022",
//         icon: Paintbrush,
//     },
//     {
//         title: "Web Developer",
//         description: "Completed Landing Page Design & Conversion Rate 2022",
//         icon: Code2,
//     },
//     {
//         title: "React Front Developer",
//         description: "Beginner Diploma In Basic English Grammar - Better Search",
//         icon: Globe,
//     },
//     {
//         title: "UI/UX Webflow",
//         description: "Join Our Training Course & Build Your Skill.",
//         icon: Figma,
//     },
// ];

const courses = [
    {
      title: "AP Calculus AB",
      description: "Explore the concepts, methods, and applications of differential and integral calculus.",
      icon: Calculator,
    },
    {
      title: "AP Computer Science A",
      description: "Learn the fundamental concepts of computer science using Java programming language.",
      icon: Code2,
    },
    {
      title: "AP English Literature and Composition",
      description: "Study and analyze literary works from different periods and genres.",
      icon: Book,
    },
    {
      title: "AP United States Government and Politics",
      description: "Study the political systems, structures, and government of the United States.",
      icon: Compass,
    },
    {
      title: "AP Macroeconomics",
      description: "Study the principles of economics that apply to an economic system as a whole.",
      icon: BarChart,
    },
    {
      title: "AP Physics 1: Algebra-Based",
      description: "Study classical mechanics, energy, and waves with algebra-based concepts.",
      icon: Atom,
    },
    {
      title: "AP Psychology",
      description: "Learn the scientific study of behavior and mental processes.",
      icon: Brain,
    },
    {
      title: "AP Statistics",
      description: "Learn about the major concepts and methods used in collecting, analyzing, and drawing conclusions from data.",
      icon: ClipboardCheck,
    },
  ];

const Courses = () => {
    return (
        <section className="bg-gray-200 py-16">
            <div className="container mx-auto p-6 text-center">
                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                        Our Ap Courses
                    </h2>
                    <p className="mt-4 text-gray-600">
                        On the other hand, we denounce with righteous indignation and
                        dislike men who are so beguiled.
                    </p>
                </motion.div>

                {/* Courses Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
                    {courses.map((course, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileHover={{ scale: 1.05 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="bg-white shadow-md rounded-lg p-6"
                        >
                            <div className="flex justify-center items-center mb-4">
                                <course.icon className="w-10 h-10 text-green-600" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800">
                                {course.title}
                            </h3>
                            <p className="mt-2 text-sm text-gray-600">{course.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Courses;
