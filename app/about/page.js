
import Link from "next/link"; import Image from 'next/image'; import { FaFacebook, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa'; // Social Icon Component const SocialIcon = ({ icon: Icon, href }) => ( <a href={href} target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-full transition-colors duration-200 hover:bg-gray-100 shadow-md" aria-label={Icon.name.replace('Fa', '')} > <Icon className="h-5 w-5 text-gray-700" /> </a> ); const HeroSection = () => { const gradientStyle = { backgroundImage: 'linear-gradient(to right bottom, #d16969ff 20%, #fefce8 60%, #04f560be 100%)', }; return ( <div className="min-h-screen bg-gray-50 p-4 md:p-8 flex items-center"> <main className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"> {/* Left Content (Gradient Box) */} <section className="p-6 md:p-10 flex flex-col justify-center rounded-[30px] shadow-2xl min-h-[420px]" style={gradientStyle} > <h1 className="text-3xl md:text-5xl font-extrabold mb-5 leading-snug text-gray-900"> Hi, I am <span className="text-black">Abdul Malek</span> <br /> I'm a Professional Web Designer & Developer </h1> <p className="text-base md:text-lg text-gray-700 mb-8 max-w-lg"> I care about creating user-friendly, modern, and meaningful digital experiences. </p> {/* Contact Button + Social Icons */} <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6"> <button className="px-8 py-3 bg-black text-white rounded-xl font-semibold hover:bg-gray-800 transition-colors shadow-lg"> <Link href="/contact"> Contact Me</Link> </button> <div className="flex space-x-3"> <SocialIcon icon={FaFacebook} href="https://www.facebook.com/AbdulMalekReachargeAndTelecomBusiness/" /> <SocialIcon icon={FaInstagram} href="https://www.instagram.com/abdulmalek3367/" /> <SocialIcon icon={FaTwitter} href="https://x.com/abdulmalekwd" /> <SocialIcon icon={FaLinkedinIn} href="https://www.linkedin.com/in/abdul-malek-877351395" /> </div> </div> </section> {/* Right Image */} <div className="flex justify-center lg:justify-end mt-6 lg:mt-0"> <Image src="/profile.png" alt="Abdul Malek" width={350} height={350} className="rounded-3xl object-cover w-[250px] sm:w-[300px] md:w-[350px]" /> </div> </main> </div> ); }; export default HeroSection;


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
        Hello! I'm Abdul Malek, a passionate web developer from Bangladesh.
        I love building clean, modern, and user-friendly websites that work smoothly on all devices.</p>

 <p>My web development journey began with a simple curiosity about how websites work. Today,
  I have strong skills in React, Next.js, and Tailwind CSS, which help me create fast, responsive, and professional web applications.
  I enjoy learning new technologies and improving my skills every day to deliver the best results.
        </p>
      </div>

      {/* Skills Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">My Tech Stack</h2>
        <div className="flex flex-wrap gap-4">
          {/* Skill Tags */}
          {['JavaScript', 'React.js', 'Next.js', 'Tailwind CSS','Git'].map((skill) => (
            <span key={skill} className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full font-medium text-sm border border-gray-200">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </main>
  );
}
