export default function FAQSection() {
    const faqs = [
      {
        question: "What types of counseling do you provide?",
        answer: "We offer academic, personal development, and career counseling.",
      },
      {
        question: "Are my counseling sessions private?",
        answer: "Absolutely! All counseling sessions are kept confidential.",
      },
    ];

    return (
      <section className="py-20 px-8 bg-green-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-black-700 mb-10">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="p-6 bg-white border-2 border-green-200 rounded-xl shadow-md hover:shadow-lg transition duration-300">
                <h3 className="text-xl font-semibold text-green-800 mb-3">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
}
