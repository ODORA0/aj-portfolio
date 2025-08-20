import React from 'react'

const quotes = [
  {
    by: 'Program Manager, Health NGO',
    text: 'Helped our teams adopt data-driven patient care workflows; training and support were exceptional.',
  },
  {
    by: 'Tech Lead, OpenMRS Community',
    text: 'Consistently delivers production-grade code and helpful reviews—raised the bar for the module.',
  },
  {
    by: 'QA Manager',
    text: 'Led the transition to automated testing; improved release confidence and reduced regressions.',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="section border-t border-black/5 dark:border-white/10">
      <div className="container-2xl">
        <h2 className="text-2xl sm:text-3xl font-bold">Impact & Testimonials</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {quotes.map((q, i) => (
            <blockquote key={i} className="card p-6">
              <p className="text-neutral-800 dark:text-neutral-200">“{q.text}”</p>
              <footer className="mt-3 text-sm text-neutral-500 dark:text-neutral-400">— {q.by}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
