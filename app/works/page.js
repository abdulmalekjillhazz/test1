export const metadata = {
  title: 'Works | Abdul Malek',
};

export default function Works() {
  // Dummy Data for Projects (পরে আপনি আসল ডেটা দেবেন)
  const projects = [
    {
      id: 1,
      title: "E-Commerce Dashboard",
      description: "A complete dashboard built with Next.js and Tailwind for managing online stores.",
      tag: "Next.js"
    },
    {
      id: 2,
      title: "Portfolio Template",
      description: "A minimalist portfolio website design for creative professionals.",
      tag: "Design"
    },
    {
      id: 3,
      title: "Task Management App",
      description: "A productivity app to track daily tasks and manage teams efficiently.",
      tag: "React"
    }
  ];

  return (
    <main className="px-8 md:px-16 py-12 max-w-7xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-10">Selected Works</h1>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="group border border-gray-200 rounded-3xl p-6 hover:shadow-xl transition-shadow duration-300 bg-white">
            
            {/* Fake Image Placeholder */}
            <div className="h-48 bg-gray-100 rounded-2xl mb-6 flex items-center justify-center text-gray-400">
              Project Image
            </div>

            {/* Content */}
            <span className="text-sm font-bold text-blue-600 uppercase tracking-wide">
              {project.tag}
            </span>
            <h3 className="text-2xl font-bold mt-2 mb-3 group-hover:text-blue-600 transition-colors">
              {project.title}
            </h3>
            <p className="text-gray-600 mb-6">
              {project.description}
            </p>

            <button className="text-black font-semibold border-b-2 border-black pb-1 hover:text-blue-600 hover:border-blue-600 transition-all">
              View Project &rarr;
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}