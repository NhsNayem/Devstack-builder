import TechnologyCard from './TechnologyCard.jsx'

export default function TechnologyGrid({ technologies, stackIds, onAdd }) {
  return (
    <section id="technologies" className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-extrabold text-ink sm:text-3xl">
        Explore the <span className="text-gradient">Technologies</span>
      </h2>
      <p className="mt-2 max-w-xl text-sm text-gray-500">
        Browse frontend, backend, database, language, styling, DevOps, and tooling picks — add
        whatever fits your project to build your own stack.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {technologies.map((tech) => (
          <TechnologyCard
            key={tech.id}
            tech={tech}
            isAdded={stackIds.has(tech.id)}
            onAdd={onAdd}
          />
        ))}
      </div>
    </section>
  )
}
