import heroIllustration from '../assets/hero-illustration.png'

export default function Hero() {
  return (
    <section id="home" className="mx-auto max-w-7xl px-4 pt-14 pb-10 sm:px-6 lg:px-8 lg:pt-20">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-ink sm:text-5xl">
            Build Your Ideal
            <br />
            <span className="text-gradient">Development Stack</span>
          </h1>
          <p className="mt-5 max-w-md text-base text-gray-500">
            Explore modern frontend, backend, database, and tooling technologies, then hand-pick the
            ones you want and assemble a stack that fits your next project.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#technologies"
              className="rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-white shadow-card transition hover:opacity-90"
            >
              Explore Technologies
            </a>
            <a
              href="#about"
              className="rounded-full border border-gray-300 px-6 py-3 text-sm font-semibold text-ink transition hover:border-gray-400"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <img
            src={heroIllustration}
            alt="Layered illustration representing a development stack"
            className="w-full max-w-md drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  )
}
