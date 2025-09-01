type Project = {
  title: string
  role: string
  timeframe: string
  stack: string[]
  summary: string
}

const projects: Project[] = [
  {
    title: "Look Fantastic - Order Lifecycle UI & APIs",
    role: "Full Stack Developer",
    timeframe: "Aug 2023 – Present",
    stack: ["React", "Redux", "Node.js", "Express", "MongoDB", "MySQL", "Jest"],
    summary:
      "Developed responsive React UI and REST APIs to manage orders from draft to shipped. Integrated MongoDB and MySQL with automated testing and CI/CD.",
  },
  {
    title: "Narmans - Order Management System",
    role: "Full Stack Developer",
    timeframe: "May 2022 – Jul 2023",
    stack: ["React", "Redux", "Node.js", "Express", "MongoDB", "MySQL", "Jest"],
    summary:
      "Built end-to-end order workflows, including draft, confirmed, and shipped stages, with reminders and sample tracking.",
  },
]

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 px-6 md:px-20 bg-white text-gray-900"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-12">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p) => (
            <div
              key={p.title}
              className="border rounded-xl shadow-lg p-6"
            >
              <h3 className="text-3xl font-semibold mb-2">{p.title}</h3> {/* bigger */}
              <p className="text-base md:text-lg text-gray-600 mb-2">
                {p.role} · {p.timeframe}
              </p>
              <p className="text-lg mb-4">{p.summary}</p> {/* bigger */}
              <div className="flex flex-wrap gap-2 text-base"> {/* bigger badges */}
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1 bg-indigo-100 text-indigo-900 rounded font-medium"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
