import expertise from "@/src/assets/images/expertise.jpg";
import technicalExpertise from "@/src/assets/images/ai-ethics.jpg";
import aiSolutions from "@/src/assets/images/ai-solutions.jpg";
import itConsulting from "@/src/assets/images/it-consulting.jpg";
import softwareDevelopment from "@/src/assets/images/software-development.jpg";

export default function Sections() {
  return (
    <>
      <section className="bg-gray-200 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-3xl font-bold">Our Services</h2>
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-lg transition duration-300 hover:shadow-xl">
              <img
                src={aiSolutions}
                alt="AI Solutions"
                className="mb-4 h-48 w-full rounded-lg object-cover"
              />
              <h3 className="mb-2 text-2xl font-bold">Intelligent Solutions</h3>
              <p className="text-lg">
                Harness the power of artificial intelligence to drive innovation
                and efficiency in your business processes.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-lg transition duration-300 hover:shadow-xl">
              <img
                src={softwareDevelopment}
                alt="Software Development"
                className="mb-4 h-48 w-full rounded-lg object-cover"
              />
              <h3 className="mb-2 text-2xl font-bold">Software Development</h3>
              <p className="text-lg">
                Custom software development services tailored to meet your
                specific business needs and objectives.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-lg transition duration-300 hover:shadow-xl">
              <img
                src={itConsulting}
                alt="IT Consulting"
                className="mb-4 h-48 w-full rounded-lg object-cover"
              />
              <h3 className="mb-2 text-2xl font-bold">
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
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-3xl font-bold">
            Expertise and Excellence
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="flex flex-col items-center">
              <img
                src={expertise}
                alt="Expertise"
                className="mb-4 h-64 w-full rounded-lg object-cover shadow-lg"
              />
              <h3 className="mb-2 text-2xl font-bold">Industry Knowledge:</h3>
              <p className="text-center text-lg">
                Deep understanding of the client’s industry and specific
                business challenges.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={technicalExpertise}
                alt="Technical Expertise"
                className="mb-4 h-64 w-full rounded-lg object-cover shadow-lg"
              />
              <h3 className="mb-2 text-2xl font-bold">Technical Expertise:</h3>
              <p className="text-center text-lg">
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
