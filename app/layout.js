import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link"; // Link component import করা হলো
import Footer from "./footer/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  // আপনার পোর্টফোলিও টাইটেল এখানে
  title: "Abdul Malek Portfolio | Web Developer", 
  description: "Personal portfolio built with Next.js and Tailwind CSS.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-black`}
      >
        
        {/* === Header এবং Navbar Section === */}
        {/* sticky top-0 এবং shadow-sm দিয়ে একে সুন্দর ব্যাকগ্রাউন্ড ও শ্যাডো দেওয়া হলো */}
        <div className="sticky top-0 z-10 bg-white shadow-sm border-b border-gray-100">
          
          <header className="flex justify-between items-center py-5 px-8 md:px-16 max-w-7xl mx-auto">
            
            {/* Logo / Name */}
            <div className="text-2xl font-bold uppercase tracking-wider text-black">
              <Link href="/">ABDUL MALEK</Link>
            </div>

            {/* Navigation Links */}
            <nav>
              <ul className="flex space-x-20 text-2xl text-blue-700">
                <li><Link href="/" className="hover:text-black transition">Home</Link></li>
                <li><Link href="/about" className="hover:text-black transition">About</Link></li>
                <li><Link href="/works" className="hover:text-black transition">Works</Link></li>
                <li><Link href="/contact" className="hover:text-black transition">Contact</Link></li>
              </ul>
            </nav>

          </header>
    
        </div>
        
        {/* Main Page Content (Home, About, Works, etc.) */}

        {children}
      <Footer>
          <Link href="/footer" className="flex flex-col min-h-screen">Footer </Link>
      </Footer>
             
      </body>
</html>
  );
}