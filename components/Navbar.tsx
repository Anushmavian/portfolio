import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-gray-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-6">
        <h1 className="text-xl font-bold">Anushma Vibhu</h1>
        <div className="space-x-6">
          <Link href="#about" className="hover:text-indigo-400">About</Link>
          <Link href="#skills" className="hover:text-indigo-400">Skills</Link>
          <Link href="#projects" className="hover:text-indigo-400">Projects</Link>
          <Link href="#contact" className="hover:text-indigo-400">Contact</Link>
          <a
            href="/anushma-cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  )
}
