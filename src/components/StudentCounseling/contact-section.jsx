export default function ContactSection() {
    return (
      <section id="contact" className="py-20 bg-green-700 text-white px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-6">Let's Connect!</h2>
          <p className="text-lg mb-10 leading-relaxed">
            Whether you have questions or want to schedule a session, we're here to assist you every step of the way.
          </p>
          <div className="flex justify-center items-center space-x-6">
            <a
              href="mailto:counseling@example.com"
              className="bg-white text-green-700 px-8 py-4 font-medium rounded-lg shadow-xl hover:bg-green-100 transition-all duration-300"
            >
              Email Us
            </a>
            <a
              href="tel:+123456789"
              className="bg-transparent text-white border-2 border-white px-8 py-4 font-medium rounded-lg hover:bg-white hover:text-green-700 transition-all duration-300"
            >
              Call Us
            </a>
          </div>
        </div>
      </section>
    );
}
