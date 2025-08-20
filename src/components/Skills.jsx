import React from 'react'
import { Wrench, Code, Database, Boxes } from 'lucide-react'

const hard = [
  'Java (Spring, Hibernate, OpenMRS)',
  'Python (Odoo)',
  'Node.js (Express)',
  'React, TypeScript, Tailwind',
  'RESTful APIs, FHIR',
  'MySQL, PostgreSQL',
  'Docker, Tomcat, CI/CD',
  'Jest, RTL, Cypress'
]

const soft = [
  'Team Leadership & QA',
  'Stakeholder Communication',
  'Training of Trainers (ToT)',
  'Agile Delivery',
  'Mentoring & Code Reviews',
  'Systems Thinking',
]

export default function Skills() {
  return (
    <section id="skills" className="section border-t border-black/5 dark:border-white/10">
      <div className="container-2xl">
        <h2 className="text-2xl sm:text-3xl font-bold">Skills</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="card p-6">
            <h3 className="font-semibold flex items-center gap-2"><Code className="h-5 w-5" /> Technical</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {hard.map(s => <span key={s} className="badge">{s}</span>)}
            </div>
          </div>
          <div className="card p-6">
            <h3 className="font-semibold flex items-center gap-2"><Wrench className="h-5 w-5" /> Leadership & Soft Skills</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {soft.map(s => <span key={s} className="badge">{s}</span>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
