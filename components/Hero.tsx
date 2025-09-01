import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20"
    >
      {/* Background Image */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/code-bg.jpg"
          alt="Coding background"
          fill
          style={{ objectFit: "cover" }} // ensures full coverage
          priority
        />
        {/* Optional overlay for contrast */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Hero Text */}
      <div className="md:w-1/2 space-y-6 text-center md:text-left text-white z-10">
        <h1 className="text-5xl md:text-7xl font-bold">
          Hi, I’m <span className="text-green-400">Anushma Vibhu</span>
        </h1>
        <p className="text-xl md:text-2xl max-w-lg">
          Full Stack Developer specializing in React, Node.js, and modern web
          applications. Skilled Worker Visa, open to opportunities in the UK.
        </p>
        <div className="space-x-4 mt-4">
          <Link
            href="#projects"
            className="px-6 py-3 bg-green-400 hover:bg-green-500 text-black rounded-lg shadow-md transition"
          >
            View Projects
          </Link>
          <a
            href="/anushma-cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-green-400 hover:bg-green-400/20 text-green-400 rounded-lg transition"
          >
            Download CV
          </a>
        </div>
      </div>

      {/* Profile Image */}
      <div className="md:w-1/2 mb-10 md:mb-0 flex justify-center md:justify-end z-10">
        <div className="w-96 h-96 relative">
          <Image
            src="/anushma.jpg"
            alt="Anushma Vibhu"
            width={384}
            height={384}
            className="rounded-full border-4 border-green-400 object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}
