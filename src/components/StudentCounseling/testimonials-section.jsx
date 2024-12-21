export default function ClientFeedback() {
    const feedbacks = [
      {
        client: "Abc",
        message:
          "The guidance I received truly helped me focus on the right opportunities. I am now confident in my career choice!",
      },
      {
        client: "Xyz",
        message: "Exceptional support throughout my academic journey. I couldn't have asked for better advice.",
      },
    ];

    return (
      <section className="py-20 px-8 bg-blue-50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-8 text-black-800">What Our Clients Say</h2>
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-12">
            {feedbacks.map((feedback, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg transition-transform transform hover:scale-105"
              >
                <p className="text-lg font-medium text-gray-700 mb-5">
                  "{feedback.message}"
                </p>
                <h3 className="text-2xl font-semibold text-green-700">{feedback.client}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
}
