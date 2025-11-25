export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-500 to-red-600 text-gray-900 font-bold py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Logo + Description */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Abdul Malek</h2>
          <p className="mt-3 text-sm">
            Creating clean & modern web experiences that help brands grow online.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/about" className="hover:text-white">About</a></li>
            <li><a href="/services" className="hover:text-white">Services</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Services</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Web Design</a></li>
            <li><a href="#" className="hover:text-white">Web Development</a></li>
            <li><a href="#" className="hover:text-white">Digital Marketing</a></li>
            <li><a href="#" className="hover:text-white">Graphic Design</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Contact</h3>
          <p className="text-sm">Mohanganj, Netrokona, Bangladesh</p>
          <p className="text-sm mt-2">Email: abdulmalek67343367@gmail.com</p>
          <p className="text-sm">Phone: +880 1914565925</p>

          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-white text-xl">🌐</a>
            <a href="#" className="hover:text-white text-xl">📘</a>
            <a href="#" className="hover:text-white text-xl">🐦</a>
            <a href="#" className="hover:text-white text-xl">📸</a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center mt-10 border-t border-gray-900 pt-5 text-sm">
        © {new Date().getFullYear()} Abdul Malek — All rights reserved.
      </div>
    </footer>
  );
}
