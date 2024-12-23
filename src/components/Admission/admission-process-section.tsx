export default function AdmissionProcess() {
    const steps = [
      {
        id: 1,
        title: "Step 1",
        description: "This slide is 100% editable. Adapt it to your needs and capture your audience's attention.",
      },
      {
        id: 2,
        title: "Step 2",
        description: "This slide is 100% editable. Adapt it to your needs and capture your audience's attention.",
      },
      {
        id: 3,
        title: "Step 3",
        description: "This slide is 100% editable. Adapt it to your needs and capture your audience's attention.",
      },
      {
        id: 4,
        title: "Step 4",
        description: "This slide is 100% editable. Adapt it to your needs and capture your audience's attention.",
      },
      {
        id: 5,
        title: "Step 5",
        description: "This slide is 100% editable. Adapt it to your needs and capture your audience's attention.",
      },
    ];
  
    return (
      <div className="bg-gray-100 py-10">
        <h2 className="text-center text-3xl font-bold mb-10">
          Our Admission Process
        </h2>
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-gray-300"></div>
  
          {/* Steps */}
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`flex items-center mb-10 ${
                index % 2 === 0 ? "justify-end" : "justify-start"
              }`}
            >
              {/* Connector */}
              <div className="relative w-1/2 px-6">
                {index % 2 === 0 && (
                  <div className="text-right">
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                    <p className="text-gray-700">{step.description}</p>
                  </div>
                )}
              </div>
              {/* Circle */}
              <div className="relative z-10 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                {step.id}
              </div>
              {/* Right Text */}
              <div className="relative w-1/2 px-6">
                {index % 2 !== 0 && (
                  <div className="text-left">
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                    <p className="text-gray-700">{step.description}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  