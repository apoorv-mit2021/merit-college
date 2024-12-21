import Image from "next/image";
import React from "react";

const LandingPageHeroSection = () => {
    return (
        <section className="relative bg-gray-50 text-gray-800 py-16 lg:py-24 overflow-hidden">
            {/* Background Image with Enhanced Blur */}

            <div className="absolute inset-0">
                <Image
                    src="/background.jpg"
                    alt="Background"
                    layout="fill"
                    objectFit="cover"
                    className="blur-md"
                />
            </div>

            <div
                className="container mx-auto flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 px-6 lg:px-12 relative z-10"
            >
                {/* Left Content */}
                <div className="lg:w-1/2 space-y-6">
                <h2 className="lg:text-4xl font-bold text-green-900 leading-tight mb-2">
                        Empowering Your Future
                    </h2>
                    <h3 className="text-4xl lg:text-5xl font-bold text-green-700 mb-2">
                        The Best Credit College in Canada
                    </h3>
                    <p className="text-lg text-black font-bold">
                        Discover unparalleled opportunities to build your career with expert guidance,
                        innovative programs, and a commitment to excellence in education. Your journey
                        to success starts here.
                    </p>
                    {/* Stats Cards */}
                    <div className="grid grid-cols-2 gap-6">
                        {[
                            {stat: "100%", description: "Grads Receive University Offers"},
                            {stat: "8:1", description: "Student to Faculty Ratio"},
                            {stat: "90%", description: "Teachers with Advanced Degrees"},
                            {stat: "95%", description: "Grads were Ontario Scholars"},
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="bg-white shadow-lg rounded-lg p-4 text-center border-2 border-green-700"
                            >
                                <p className="text-3xl font-bold text-green-900">{item.stat}</p>
                                <p className="text-sm text-gray-600">{item.description}</p>
                            </div>
                        ))}
                    </div>
                    {/* Must Visit Button */}
                    <div className="mt-6">
                        <button
                            className="bg-green-700 text-white px-8 py-4 rounded-lg shadow-md hover:bg-green-800 transition flex items-center space-x-2">
                            <span>Register Now</span>
                        </button>
                    </div>
                </div>

                {/* Right Form */}
                <div className="lg:w-1/3 bg-white rounded-lg shadow-lg p-8">
                    <h3 className="text-2xl font-semibold text-green-900 mb-4">Inquire Now</h3>
                    <form className="space-y-6">
  <div>
    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
      Name
    </label>
    <input
      type="text"
      id="name"
      placeholder="Enter your name"
      className="mt-1 w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-green-700 focus:border-green-700"
    />
  </div>

  <div>
    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
      Email
    </label>
    <input
      type="email"
      id="email"
      placeholder="Enter your email"
      className="mt-1 w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-green-700 focus:border-green-700"
    />
  </div>

  <div>
    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
      Phone Number
    </label>
    <input
      type="tel"
      id="phone"
      placeholder="Enter your phone number"
      className="mt-1 w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-green-700 focus:border-green-700"
    />
  </div>

  <div>
    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
      Message
    </label>
    <textarea
      id="message"
      placeholder="Enter your message"
      rows={4}
      className="mt-1 w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-green-700 focus:border-green-700"
    ></textarea>
  </div>

  <div>
    <button
      type="submit"
      className="w-full bg-green-700 text-white py-3 rounded-lg shadow-md hover:bg-green-800 transition flex items-center justify-center space-x-2"
    >
      <span>Submit</span>
      <span>&rarr;</span>
    </button>
  </div>
</form>

                </div>
            </div>
        </section>
    );
};

export default LandingPageHeroSection;