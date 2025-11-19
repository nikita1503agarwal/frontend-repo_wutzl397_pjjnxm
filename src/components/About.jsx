export default function About() {
  const skills = [
    'React',
    'TypeScript',
    'Tailwind CSS',
    'Node.js',
    'Next.js',
    'FastAPI',
    'MongoDB',
    'Framer Motion',
  ]

  return (
    <section id="about" className="py-24">
      <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-1">
          <h2 className="text-3xl font-bold text-white">About</h2>
          <p className="mt-3 text-blue-200/90">A quick snapshot of who I am and what I do.</p>
        </div>

        <div className="lg:col-span-2">
          <div className="bg-slate-800/50 border border-white/10 rounded-2xl p-6">
            <p className="text-blue-100/90 leading-relaxed">
              I’m a frontend-focused developer passionate about building elegant, accessible, and performant user interfaces. I collaborate closely with designers and product teams to craft experiences that feel great and deliver real value. I also enjoy working across the stack to ship complete features end-to-end.
            </p>

            <div className="mt-6">
              <h3 className="text-white font-semibold mb-3">Key skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span key={s} className="px-3 py-1 text-sm rounded-full bg-blue-500/10 text-blue-200 border border-blue-400/20">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
