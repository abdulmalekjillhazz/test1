export const metadata = {
  title: 'About | Abdul Malek',
  description: 'Learn more about Abdul Malek',
};

export default function About() {
  return (
    <main className="px-8 md:px-16 py-12 max-w-4xl mx-auto">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold mb-8">About Me</h1>

      {/* Description */}
      <div className="text-lg text-gray-600 leading-8 space-y-6">
        <p>
          Hello! I'm Abdul Malek, a dedicated web developer based in Bangladesh. 
          I have a passion for creating clean, modern, and user-friendly web applications.
        </p>
        <p>
          My journey in web development started with a curiosity for how things work on the internet. 
          Over the years, I have honed my skills in **React, Next.js, and Tailwind CSS**, allowing me to build 
          high-performance applications that look great on any device.
        </p>
      </div>

      {/* Skills Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">My Tech Stack</h2>
        <div className="flex flex-wrap gap-4">
          {/* Skill Tags */}
          {['JavaScript', 'React.js', 'Next.js', 'Tailwind CSS', 'Node.js', 'MongoDB', 'Git'].map((skill) => (
            <span key={skill} className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full font-medium text-sm border border-gray-200">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </main>
  );
}