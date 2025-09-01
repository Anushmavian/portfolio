const skills = [
  "React",
  "Redux",
  "Node.js",
  "Express",
  "MongoDB",
  "MySQL",
  "Jest",
  "TypeScript",
  "TailwindCSS",
]

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 px-6 md:px-20 bg-gray-50 text-gray-900"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-10">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 bg-indigo-100 text-indigo-900 rounded-lg font-medium shadow-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
