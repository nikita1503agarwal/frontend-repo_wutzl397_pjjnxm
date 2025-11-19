export default function Projects() {
  const projects = [
    {
      title: 'UI Components Library',
      description: 'A collection of accessible, themeable React components built with Tailwind.',
      tags: ['React', 'Tailwind', 'Radix UI'],
      link: '#',
    },
    {
      title: 'Personal Analytics Dashboard',
      description: 'Interactive charts and insights powered by a FastAPI backend.',
      tags: ['FastAPI', 'MongoDB', 'Charts'],
      link: '#',
    },
    {
      title: 'Motion Experiments',
      description: 'A playground of micro-interactions and animations with Framer Motion.',
      tags: ['Framer Motion', 'UX'],
      link: '#',
    },
  ]

  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-white">Projects</h2>
            <p className="text-blue-200/90 mt-2">Some things I’ve built recently.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex px-4 py-2 rounded-lg bg-white text-slate-900 font-medium">Work with me</a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <a key={p.title} href={p.link} className="group bg-slate-800/50 border border-white/10 rounded-2xl p-5 hover:border-white/20 transition-colors">
              <div className="aspect-[16/10] rounded-xl bg-gradient-to-br from-blue-500/15 to-cyan-500/10 border border-white/10 mb-4" />
              <h3 className="text-white font-semibold group-hover:text-white/90">{p.title}</h3>
              <p className="text-sm text-blue-200/90 mt-1">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-200">
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
