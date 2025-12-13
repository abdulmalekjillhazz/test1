import Link from "next/link"//
import Image from "next/image"//
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa"

// Social Icon Component
const SocialIcon = ({ icon: Icon, href }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={Icon.name.replace("Fa", "")}
      className="p-3 bg-white rounded-full shadow-md transition-colors duration-200 hover:bg-gray-100"
    >
      <Icon className="h-5 w-5 text-gray-700" />
    </a>
  )
}

const HeroSection = () => {
  const gradientStyle = {
    backgroundImage:
      "linear-gradient(to right bottom, #d16969ff 20%, #fefce8 60%, #04f560be 100%)",
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8 flex items-center">
      <main className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

        {/* LEFT CONTENT */}
        <section
          style={gradientStyle}
          className="
  p-6 md:p-12 lg:p-20
  flex flex-col justify-center
  rounded-[30px] shadow-2xl
  min-h-[420px] md:min-h-[520px] lg:min-h-[650px]
">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-5 leading-snug text-gray-900">
            Hi, I am <span className="text-black">Abdul Malek</span>
            <br />
            I'm a Professional Web Designer & Developer
          </h1>

          <p className="text-base md:text-lg text-gray-700 mb-8 max-w-lg">
            I care about creating user-friendly, modern, and meaningful digital
            experiences.
          </p>

          {/* CTA + SOCIAL */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <Link
              href="/contact"
              className="px-8 py-3 bg-black text-white rounded-xl font-semibold shadow-lg transition-colors hover:bg-gray-800"
            >
              Contact Me
            </Link>

            <div className="flex space-x-3">
              <SocialIcon
                icon={FaFacebook}
                href="https://www.facebook.com/AbdulMalekReachargeAndTelecomBusiness/"
              />
              <SocialIcon
                icon={FaInstagram}
                href="https://www.instagram.com/abdulmalek3367/"
              />
              <SocialIcon
                icon={FaTwitter}
                href="https://x.com/abdulmalekwd"
              />
              <SocialIcon
                icon={FaLinkedinIn}
                href="https://www.linkedin.com/in/abdul-malek-877351395"
              />
            </div>
          </div>
        </section>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center lg:justify-end mt-6 lg:mt-0">
        <Image
  src="/profile.png"
  alt="Abdul Malek"
  width={600}
  height={600}
  className="
    rounded-3xl object-cover
    w-[260px]
    sm:w-[320px]
    md:w-[420px]
    lg:w-[520px]
    xl:w-[600px]"/>
        </div>

      </main>
    </div>
  )
}

export default HeroSection
