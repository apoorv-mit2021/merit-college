import { useState } from "react";
import { X, Menu } from "lucide-react"; // Importing icons
import Image from "next/image";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to track sidebar visibility

  const menuItems = [
    { name: "International Students", href: "/international-students" },
    { name: "Tech-School", href: "/tech-school" },
    { name: "Student Life", href: "/student-life" },
    { name: "SAT Prep", href: "/sat-prep" },
    { name: "Vocational Courses", href: "/vocational-courses" },
    { name: "Admission", href: "/admission" },
  ];

  return (
    <div>
      {/* Button to open sidebar */}
      <button onClick={() => setIsOpen(true)} className="p-4 z-50">
        <Menu className="w-6 h-6" />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 w-100 h-full bg-white text-black p-6 z-50 transition-all duration-300 ease-in-out transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Button to close sidebar */}
        <div className="flex items-center justify-between">
          <Image
            src="/logo-2.webp"
            alt="Merit College Logo"
            width={300}
            height={300}
            priority
          />
          <button onClick={() => setIsOpen(false)}>
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Sidebar Links */}
        <ul className="space-y-4 mt-6">
          {menuItems.map((item) => (
            <li key={item.name} className="">
              <a
                href={item.href}
                className="text-black hover:bg-gray-200 rounded-md px-4 py-2 block"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
