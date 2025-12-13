"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"

export default function HeroSection() {
  const glowRef = useRef(null)

  useEffect(() => {
    const move = (e) => {
      const x = (e.clientX / window.innerWidth) * 100
      const y = (e.clientY / window.innerHeight) * 100

      if (!glowRef.current) return

      glowRef.current.style.background = `
        radial-gradient(
          400px at ${x}% ${y}%,
          rgba(255, 80, 80, 0.35),
          transparent 60%
        ),
        radial-gradient(
          500px at ${100 - x}% ${y}%,
          rgba(80, 150, 255, 0.35),
          transparent 65%
        ),
        radial-gradient(
          600px at ${x}% ${100 - y}%,
          rgba(80, 255, 170, 0.30),
          transparent 70%
        )
      `
    }

    window.addEventListener("mousemove", move)
    return () => window.removeEventListener("mousemove", move)
  }, [])

  return (
    <section className="relative min-h-screen w-full overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <Image
        src="/profile.jpg"   // 👉 তোমার image
        alt="Abdul Malek"
        fill
        priority
        className="object-cover"
      />

      {/* COLOR GLOW LAYER */}
      <div
        ref={glowRef}
        className="absolute inset-0 z-10 pointer-events-none mix-blend-screen"
      />

      {/* DARK OVERLAY (readability) */}
      <div className="absolute inset-0 bg-black/40 z-20"></div>

      {/* CONTENT */}
      <div className="relative z-30 min-h-screen flex items-center px-6">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            Hi, I’m Abdul Malek <br />
            Web Designer & Developer
          </h1>

          <p className="text-lg text-gray-200 mb-8">
            I create modern, meaningful, and interactive digital experiences.
          </p>

          <button className="px-8 py-3 bg-white text-black rounded-xl font-semibold hover:scale-105 transition">
            Contact Me
          </button>
        </div>
      </div>

    </section>
  )
}

