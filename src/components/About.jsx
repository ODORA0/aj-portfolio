import React from 'react'
import { FileDown } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="section border-t border-black/5 dark:border-white/10">
      <div className="container-2xl grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold">About Me</h2>
          <p className="mt-4 text-neutral-700 dark:text-neutral-300">
            I’m a full-stack engineer who thrives at the intersection of backend architecture and frontend UX.
            I’ve delivered OpenMRS billing modules, Odoo integrations, and React dashboards used in real-world
            healthcare settings. I bridge technical and non-technical teams to ship solutions that matter.
          </p>
          <a href="/resume.pdf" download className="btn mt-6 inline-flex"><FileDown className="h-4 w-4" /> Download CV</a>
        </div>
        <div className="grid gap-3">
          <div className="card p-5">
            <h3 className="font-semibold">What I do</h3>
            <p className="text-neutral-700 dark:text-neutral-300 mt-2">
              Architect REST APIs, craft delightful UIs, optimize performance, and lead teams through
              code reviews, testing, and delivery.
            </p>
          </div>
          <div className="card p-5">
            <h3 className="font-semibold">Domains</h3>
            <p className="text-neutral-700 dark:text-neutral-300 mt-2">HealthTech, Billing, EMR, Data Systems, M&E.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
