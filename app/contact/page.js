export const metadata = {
  title: 'Contact | Abdul Malek',
};

export default function Contact() {
  return (
    <main className="px-8 md:px-16 py-12 max-w-3xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Let's Talk</h1>
      <p className="text-lg text-gray-600 mb-10">
        Have a project in mind or just want to say hi? Fill out the form below or send me an email directly.
      </p>

      {/* Contact Form */}
      <form className="space-y-6">
        <div className="flex flex-col space-y-2">
          <label className="font-semibold text-gray-700">Name</label>
          <input 
            type="text" 
            placeholder="Your Name" 
            className="border border-gray-300 p-4 rounded-xl focus:outline-none focus:border-blue-500 transition"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="font-semibold text-gray-700">Email</label>
          <input 
            type="email" 
            placeholder="hello@example.com" 
            className="border border-gray-300 p-4 rounded-xl focus:outline-none focus:border-blue-500 transition"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="font-semibold text-gray-700">Message</label>
          <textarea 
            rows="5" 
            placeholder="Tell me about your project..." 
            className="border border-gray-300 p-4 rounded-xl focus:outline-none focus:border-blue-500 transition"
          ></textarea>
        </div>

        {/* Black Button matching Home Page */}
        <button className="bg-black text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-800 transition w-full md:w-auto shadow-lg">
          Send Message
        </button>
      </form>

      <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-500">
        <p>Or email me at: <span className="text-black font-bold">abdulmalek67343367@gmail.com</span></p>
      </div>
    </main>
  );
}
