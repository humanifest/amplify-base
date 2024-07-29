import expertise from "@/src/assets/images/expertise.jpg";
import technicalExpertise from "@/src/assets/images/ai-ethics.jpg";
import aiSolutions from "@/src/assets/images/ai-solutions.jpg";
import itConsulting from "@/src/assets/images/it-consulting.jpg";
import softwareDevelopment from "@/src/assets/images/software-development.jpg";

export default function Sections() {
  return (
    <>
      <section className="bg-gray-200 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center">Our Services</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <img
                src={aiSolutions}
                alt="AI Solutions"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold mb-2">Intelligent Solutions</h3>
              <p className="text-lg">
                Harness the power of artificial intelligence to drive innovation
                and efficiency in your business processes.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <img
                src={softwareDevelopment}
                alt="Software Development"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold mb-2">Software Development</h3>
              <p className="text-lg">
                Custom software development services tailored to meet your
                specific business needs and objectives.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <img
                src={itConsulting}
                alt="IT Consulting"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold mb-2">
                Information Technology
              </h3>
              <p className="text-lg">
                Expert IT consulting to help you leverage technology for
                business growth and transformation.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center">
            Expertise and Excellence
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col items-center">
              <img
                src={expertise}
                alt="Expertise"
                className="w-full h-64 object-cover rounded-lg mb-4 shadow-lg"
              />
              <h3 className="text-2xl font-bold mb-2">Industry Knowledge: </h3>
              <p className="text-lg text-center">
                <div>
                  Deep understanding of the cdivent’s industry and specific
                  business challenges.
                </div>
                <div></div>
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={technicalExpertise}
                alt="technicalExpertise"
                className="w-full h-64 object-cover rounded-lg mb-4 shadow-lg"
              />
              <h3 className="text-2xl font-bold mb-2">Technical Expertise: </h3>
              <p className="text-lg text-center">
                Advanced skills and knowledge in relevant technologies,
                methodologies, or practices.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
