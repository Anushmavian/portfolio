export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-6 md:px-20 bg-gray-50 text-gray-900"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h2>
        <p className="mb-6 text-lg md:text-xl">
          I’m always open to opportunities and collaborations. Feel free to reach out!
        </p>
        <p className="mb-2">
          Email:{" "}
          <a
            href="mailto:anushma1697@gmail.com"
            className="text-indigo-600 hover:underline"
          >
            anushma1697@gmail.com
          </a>
        </p>
        <p className="mb-6">
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/anushma-vibhu-67094518b/"
            className="text-indigo-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/Anushma_Vibhu
          </a>
        </p>
        <div className="space-x-4">
          <a
            href="/anushma-cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition"
          >
            Download CV
          </a>
          <a
            href="mailto:anushma1697@gmail.com"
            className="px-6 py-3 border border-indigo-600 rounded-lg hover:bg-indigo-500/20 transition"
          >
            Send Email
          </a>
        </div>
      </div>
    </section>
  )
}
