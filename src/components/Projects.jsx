import React from 'react'
import { ExternalLink } from 'lucide-react'

const items = [
  {
    title: 'OpenMRS Billing Module',
    blurb: 'Enhanced billing workflows with REST APIs, flexible payment modes, and dynamic status updates. Implemented DB-level pagination for InsurancePolicy.',
    stack: ['Java', 'Hibernate', 'React', 'OpenMRS'],
    link: 'https://github.com/ODORA0'
  },
  {
    title: 'FHIR Inventory Provider',
    blurb: 'Implemented a custom InventoryItem resource provider and integrations for stock management.',
    stack: ['Java', 'FHIR R4', 'Spring', 'OpenMRS'],
    link: 'https://github.com/ODORA0'
  },
  {
    title: 'Odoo 18 Billing Integration',
    blurb: 'Custom billing modules, PostgreSQL, and PDF reports via wkhtmltopdf.',
    stack: ['Python', 'PostgreSQL', 'wkhtmltopdf', 'Node.js'],
    link: 'https://github.com/ODORA0'
  },
  {
    title: 'Patient Dashboard Optimization',
    blurb: 'Improved load times with API pagination and reusable frontend billing API module.',
    stack: ['React', 'TypeScript', 'SWR'],
    link: 'https://github.com/ODORA0'
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section border-t border-black/5 dark:border-white/10">
      <div className="container-2xl">
        <h2 className="text-2xl sm:text-3xl font-bold">Projects</h2>
        <p className="mt-3 text-neutral-700 dark:text-neutral-300">Selected work demonstrating backend & frontend depth.</p>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {items.map((p,i) => (
            <article key={i} className="card p-6">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <a href={p.link} target="_blank" className="text-sm text-brand-700 dark:text-brand-300 hover:underline underline-offset-4 flex items-center gap-1">
                  Details <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
              <p className="mt-3 text-neutral-700 dark:text-neutral-300">{p.blurb}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.map(s => <span key={s} className="badge">{s}</span>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
