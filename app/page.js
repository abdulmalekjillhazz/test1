import Image from 'next/image'; 

export default function Test() {
  const navItems = ['Home', 'About', 'Works', 'Contact'];

  return (
    <div>

      {/* -------------------- নেভিগেশন হেডার -------------------- */}
      <header className="flex justify-between items-center max-w-7xl mx-auto mb-8 sticky top-0 bg-white/90 backdrop-blur-sm z-10 p-4">
        <div className="text-2xl font-extrabold text-black">ABDUL MALEK</div>

        <nav className="flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="ml-6 text-gray-700 hover:text-black font-semibold transition-colors text-lg"
            >
              {item}
            </a>
          ))}
        </nav>
      </header>

      {/* -------------------- Home Section -------------------- */}
      <section id="home" className="min-h-screen max-w-7xl mx-auto pt-16 pb-24 flex items-center">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h1 className="text-6xl font-extrabold text-white mb-4">Hello, I'm Abdul Malek</h1>
            <p className="text-xl text-white mb-8 bg-blue-600 bg-p-4">
              A passionate developer specializing in building modern web applications with Next.js and Tailwind CSS.
            </p>
            <a 
              href="#contact"
              className="inline-block bg-black text-white font-bold px-8 py-3 rounded-full text-lg hover:bg-gray-900 transition duration-300 shadow-lg"
            >
              Contact Me
            </a>
          </div>

          <div className="md:w-1/2 relative w-full h-80 md:h-[400px] bg-gray-200 rounded-xl overflow-hidden shadow-2xl">
            <Image 
              src="/profile.png"
              alt="Profile Image"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
        </div>
      </section>

      {/* -------------------- About Section -------------------- */}
      <section id="about" className="min-h-screen max-w-7xl mx-auto pt-16 pb-24 border-t border-gray-100">
        <h2 className="text-4xl font-bold text-white mb-10 text-center">👤 About Me & Skills</h2>

        <div className="overflow-x-auto shadow-xl rounded-lg border border-gray-500">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">Skill Category</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">Expertise</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">Years</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 font-medium text-gray-900">Frontend Development</td>
                <td className="px-6 py-4 text-green-900 font-semibold">React, Next.js</td>
                <td className="px-6 py-4 text-gray-900">4+</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium text-gray-900">Styling & UI</td>
                <td className="px-6 py-4 text-blue-600 font-semibold">Tailwind CSS, SCSS</td>
                <td className="px-6 py-4 text-gray-900">3+</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium text-gray-900">Backend & Database</td>
                <td className="px-6 py-4 text-indigo-600 font-semibold">Node.js, MongoDB</td>
                <td className="px-6 py-4 text-gray-900">2+</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* -------------------- Works Section -------------------- */}
      <section id="works" className="min-h-screen max-w-7xl mx-auto pt-16 pb-24 border-t border-gray-100">
        <h2 className="text-4xl font-bold text-white mb-10 text-center">💼 Featured Works</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className="bg-white shadow-xl rounded-xl overflow-hidden hover:scale-[1.02] transition duration-300 border">
            <div className="relative h-48 bg-gray-200">
              <Image src="/images/project-1.jpg" alt="Project 1" fill style={{ objectFit: 'cover' }} />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">E-commerce Platform</h3>
              <p className="text-gray-600">A full-stack e-commerce solution built with Next.js and Stripe integration.</p>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-white shadow-xl rounded-xl overflow-hidden hover:scale-[1.02] transition duration-300 border">
            <div className="relative h-48 bg-gray-200">
              <Image src="/images/project-2.jpg" alt="Project 2" fill style={{ objectFit: 'cover' }} />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Blogging Site</h3>
              <p className="text-gray-600">A fast, modern blog platform using Markdown and Next.js static generation.</p>
            </div>
          </div>

          {/* Project 3 */}
          <div className="bg-white shadow-xl rounded-xl overflow-hidden hover:scale-[1.02] transition duration-300 border">
            <div className="relative h-48 bg-gray-200">
              <Image src="/images/project-3.jpg" alt="Project 3" fill style={{ objectFit: 'cover' }} />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Task Manager App</h3>
              <p className="text-gray-600">A simple and intuitive task management application.</p>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------- Contact Section -------------------- */}
      <section id="contact" className="min-h-screen max-w-7xl mx-auto pt-16 pb-24 border-t border-gray-100 flex items-center justify-center bg-gray-50 rounded-lg p-10">
        <div className="w-full max-w-lg">
          <h2 className="text-4xl font-bold text-gray-900 mb-10 text-center">📧 Get in Touch</h2>

          <form className="space-y-6 bg-white p-8 rounded-xl shadow-2xl">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input className="mt-1 w-full p-3 border border-gray-300 rounded-lg" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" className="mt-1 w-full p-3 border border-gray-300 rounded-lg" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea rows="5" className="mt-1 w-full p-3 border border-gray-300 rounded-lg" required></textarea>
            </div>

            <button className="w-full bg-black text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-800">
              Send Message
            </button>
          </form>
        </div>
      </section>

      <footer className="max-w-7xl mx-auto text-center py-8 text-gray-500 border-t">
        <p>&copy; {new Date().getFullYear()} Abdul Malek. All rights reserved.</p>
      </footer>

    </div>
  );
}
