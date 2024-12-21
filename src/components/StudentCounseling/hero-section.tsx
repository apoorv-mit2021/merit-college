import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center">

        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Empower Your Future with Expert Counseling
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Discover personalized guidance for academic success, career clarity, 
            and personal well-being. Let's take the next step in your journey together.
          </p>
          <a
            href="#contact"
            className="inline-block bg-green-600 text-white px-6 py-3 font-semibold rounded-lg shadow hover:bg-green-700"
          >
            Get Started
          </a>
        </div>

        <div className="lg:w-1/2 mt-10 lg:mt-0">
          <Image
            src="/robotics-hero.png"
            alt="Students receiving counseling"
            width={850}
            height={850}
            className="rounded-xl shadow-2xl transform hover:scale-105 transition duration-300"    
          />    
        </div>
      </div>
    </section>
  );
}
