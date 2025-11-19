import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await new Promise((r) => setTimeout(r, 600))
      setSent(true)
      setForm({ name: '', email: '', message: '' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-24">
      <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl font-bold text-white">Let’s build something</h2>
          <p className="mt-3 text-blue-200/90">Have a project in mind or just want to say hi? I’d love to hear from you.</p>
          {sent && (
            <div className="mt-4 p-3 rounded-lg bg-green-500/10 border border-green-400/20 text-green-200">
              Thanks! I’ll get back to you shortly.
            </div>
          )}
        </div>

        <form onSubmit={handleSubmit} className="bg-slate-800/50 border border-white/10 rounded-2xl p-6 space-y-4">
          <div>
            <label className="block text-sm text-blue-200 mb-1">Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full bg-slate-900/60 border border-white/10 rounded-lg px-3 py-2 text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
              placeholder="Your name"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-blue-200 mb-1">Email</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className="w-full bg-slate-900/60 border border-white/10 rounded-lg px-3 py-2 text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-blue-200 mb-1">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="5"
              className="w-full bg-slate-900/60 border border-white/10 rounded-lg px-3 py-2 text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
              placeholder="Tell me a bit about your project"
              required
            />
          </div>
          <button disabled={loading} className="w-full bg-white text-slate-900 font-semibold px-4 py-2 rounded-lg hover:opacity-90 disabled:opacity-60">
            {loading ? 'Sending...' : 'Send message'}
          </button>
        </form>
      </div>
    </section>
  )
}
