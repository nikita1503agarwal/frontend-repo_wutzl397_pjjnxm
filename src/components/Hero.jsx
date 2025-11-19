import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.25),transparent_60%)]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight"
          >
            Nick Dos Santos
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-lg text-blue-200/90 max-w-xl"
          >
            Frontend developer crafting clean, fast, and accessible web experiences. I turn ideas into polished products with thoughtful design and reliable code.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 flex items-center gap-4"
          >
            <a href="#projects" className="bg-white text-slate-900 font-semibold px-5 py-3 rounded-lg hover:opacity-90 transition-opacity">View projects</a>
            <a href="#contact" className="text-white/80 hover:text-white">Contact me</a>
          </motion.div>
        </div>

        <div className="relative">
          <div className="relative aspect-square rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/10 border border-white/10 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.35),transparent_40%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.04),transparent)]" />
            <div className="absolute -inset-12 opacity-20 blur-2xl bg-gradient-to-tr from-blue-500 to-cyan-400" />
          </div>
        </div>
      </div>
    </section>
  )
}
