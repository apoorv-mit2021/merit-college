export default function BenefitsSection() {
    const benefits = [
        {
            title: "Improved Academic Performance",
            description: "Personalized guidance helps students excel in their studies and achieve their goals.",
        },
        {
            title: "Increased Self-Confidence",
            description: "Our counselors empower students to believe in their abilities and face challenges boldly.",
        },
        {
            title: "Clearer Career Goals",
            description: "Expert advice to help students identify and work toward their career aspirations.",
        },
        {
            title: "Stronger Emotional Well-being",
            description: "Supportive counseling ensures students feel heard and emotionally balanced.",
        },
    ];

    return (
        <section className="py-16 bg-gray-50 px-6">
            <div className="max-w-7xl mx-auto">

                <div className="text-center mb-12">
                    <span className="text-green-600 font-semibold uppercase tracking-wide">
                        Why Choose Us?
                    </span>
                    <h2 className="text-4xl font-extrabold text-gray-900 mt-4">
                        The Benefits of Our Counseling
                    </h2>
                    <p className="text-gray-600 mt-4 text-lg">
                        Discover how our counseling services can transform students' lives with guidance that truly matters.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300"
                        >
                            <div className="bg-green-100 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                                <span className="text-green-600 text-xl font-bold">{index + 1}</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">{benefit.title}</h3>
                            <p className="text-gray-600 mt-3">{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
