// components/HeroSection.jsx
'use client'; 

import Image from 'next/image'; 
import { FaDribbble, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

// সোশ্যাল আইকন কম্পোনেন্ট
const SocialIcon = ({ icon: Icon, href }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="p-3 bg-white rounded-full transition-colors duration-200 hover:bg-gray-100 shadow-md"
    aria-label={Icon.name.replace('Fa', '')}
  >
    <Icon className="h-5 w-5 text-gray-700" />
  </a>
);

const HeroSection = () => {
  // ছবির মতো সূক্ষ্ম গ্র্যাডিয়েন্টের জন্য কাস্টম CSS
  const gradientStyle = {
    // সাদা (White) থেকে হালকা হলুদ/অ্যাম্বার (Yellow/Amber) রঙের গ্র্যাডিয়েন্ট
    backgroundImage: 'linear-gradient(to right bottom, #d16969ff 20%, #fefce8 60%, #04f560be 100%)',
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      
      {/* Header / Navigation */}
      <header className="flex justify-between items-center max-w-7xl mx-auto mb-8">
        <div className="text-2xl font-extrabold text-black">ABDUL MALEK</div>
        <nav className="hidden md:block">
          {['Home', 'About', 'Works', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="ml-6 text-gray-700 hover:text-black font-2xl transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>
      </header>

      {/* Main Content Grid */}
      <main className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 min-h-[80vh] items-center">

        {/* Left Content Box (Gradient Background) */}
        <section 
          className="p-8 md:p-12 flex flex-col justify-center rounded-[30px] shadow-2xl min-h-[500px]"
          style={gradientStyle}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-5 leading-tight text-gray-900">
            Hi, I am Abdul Malek I'm a proffesional web design & Developer
          </h1>
          
          <p className="text-lg text-gray-700 mb-10 max-w-xl">
            I care a lot about using design for positive impact . and enjoy creating user-centric, delightful, and human experiences.
          </p>
          
          {/* Contact Button and Social Icons */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
            
            <button className="px-8 py-3 bg-black text-white rounded-xl font-semibold hover:bg-gray-800 transition-colors shadow-lg">
              Contact me
            </button>

            {/* Social Icons List */}
            <div className="flex space-x-3">
              <SocialIcon icon={FaDribbble} href="#" />
              <SocialIcon icon={FaInstagram} href="#" />
              <SocialIcon icon={FaTwitter} href="#" />
              <SocialIcon icon={FaLinkedinIn} href="#" />
            </div>
          </div>
        </section>

        {/* Right Image Box (Solid Yellow Background) */}
        <section 
          className=" linear-gradient(to right bottom, #d16969ff 20%, #fefce8 60%, #04f560be 100%)
          rounded-full overflow-hidden shadow-2xl hidden lg:block h-full relative"
          style={{ minHeight: '500px' }} 
        >
          {/* Next.js-এর অপটিমাইজেশনের জন্য next/image কম্পোনেন্ট ব্যবহার করা হলো */}
          <Image 
            src="/profile.png" // ⚠️ আপনার ছবিটি public/images/ ফোল্ডারে রাখতে হবে
            alt="ABDUL MALEK DESIGNER" 
            fill // পুরো কন্টেইনার কাভার করার জন্য
            priority // দ্রুত লোডিং নিশ্চিত করার জন্য
            className="object-cover object-center radious-100 w-1/2"
          />
        </section>

      </main>
    </div>
  );
};

export default HeroSection;