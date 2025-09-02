const Experience = () => {
  return (
    <div
      id="experience"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-20 p-14 md:p-20 lg:p-36"
    >
      <h1 className="text-center text-5xl font-light">Experience</h1>
      <div className="flex flex-wrap gap-0 md:flex-nowrap md:gap-10">
        <div className="flex-1">
          <div className="relative space-y-1 border-l-2 p-8 text-left">
            <h3 className="text-xl font-semibold md:text-2xl">
              Senior Software Engineer
            </h3>
            <h6 className="text-lg md:text-2lg">
              The Home Depot – Atlanta, GA
            </h6>
            <p className="font-light text-md text-gray-600">
              May 2023 - Present
            </p>
            <p className="text-sm text-gray-600">
              Built cloud-native warehouse execution systems (WES) with .NET
              Core, Angular, and Azure. Developed microservices for order
              orchestration, inventory, and vendor collaboration. Improved
              scalability, resiliency, and security with event-driven workflows
              and CI/CD. Mentored junior developers on modern frameworks and
              best practices.
            </p>
            <span className="absolute -left-[11px] top-10 h-5 w-5 rounded-full bg-teal-500"></span>
          </div>
          <div className="relative space-y-1 border-l-2 p-8 text-left">
            <h3 className="text-xl font-semibold md:text-2xl">
              Software Engineer
            </h3>
            <h6 className="text-lg md:text-2lg">
              Legacy Health - Portland, OR
            </h6>
            <p className="font-light text-md text-gray-600">
              Aug 2021 - Apr 2023
            </p>
            <p className="text-sm text-gray-600">
              Modernized healthcare cost management systems with ASP.NET Core
              and Blazor. Developed secure applications for practitioner
              onboarding, claims, and reporting. Improved scalability and
              efficiency using microservices, CI/CD, and Azure cloud.
            </p>
            <span className="absolute -left-[11px] top-10 h-5 w-5 rounded-full bg-teal-500"></span>
          </div>
        </div>
        <div className="flex-1">
          <div className="relative space-y-1 border-l-2 p-8 text-left">
            <h3 className="text-xl font-semibold md:text-2xl">
              Software Engineer
            </h3>

            <h6 className="text-lg md:text-2lg">
              Medstar Health – Columbia, MD
            </h6>
            <p className="font-light text-md text-gray-600">
              Sep 2019 - Jul 2021
            </p>
            <p className="text-sm text-gray-600">
              Built .NET Core microservices, React UIs, and RESTful APIs for
              care management. Enhanced claims processing, scheduling, and
              reporting with third-party integrations. Improved performance and
              security using DevOps automation, TDD, and Azure.
            </p>
            <span className="absolute -left-[11px] top-10 h-5 w-5 rounded-full bg-teal-500"></span>
          </div>
          <div className="relative space-y-1 border-l-2 p-8 text-left">
            <h3 className="text-xl font-semibold md:text-2xl">
              Junior Software Engineer
            </h3>
            <h6 className="text-lg md:text-2lg">
              Byteridge Software Pvt Ltd - Hyderabad
            </h6>
            <p className="font-light text-md text-gray-600">
              Jul 2017 - Aug 2019
            </p>
            <p className="text-sm text-gray-600">
              Developed Transport Management Systems for scheduling, tracking,
              and logistics. Modernized legacy applications and improved
              API/database performance. Delivered scalable full-stack solutions
              for enterprise logistics operations.
            </p>
            <span className="absolute -left-[11px] top-10 h-5 w-5 rounded-full bg-teal-500"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
