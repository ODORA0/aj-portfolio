import React from 'react'
import { motion } from 'framer-motion'
import { FileDown, ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="section">
      <div className="container-2xl grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl font-bold leading-tight"
          >
            Full-Stack Software Engineer<br/>
            <span className="gradient-text">HealthTech • Data Systems</span>
          </motion.h1>
          <p className="mt-5 text-neutral-700 dark:text-neutral-300 max-w-xl">
            I design and build scalable backends, intuitive UIs, and lead teams to deliver high-impact
            digital health and billing solutions.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="btn btn-primary">See Projects <ArrowRight className="h-4 w-4" /></a>
            <a href="/resume.pdf" download className="btn"><FileDown className="h-4 w-4" /> Download CV</a>
            <a href="#contact" className="btn">Contact</a>
          </div>
          <div className="mt-8 flex flex-wrap gap-2 text-sm text-neutral-600 dark:text-neutral-400">
            <span className="badge">Java • Spring/Hibernate • OpenMRS</span>
            <span className="badge">Python • Odoo</span>
            <span className="badge">React • TypeScript • Tailwind</span>
            <span className="badge">REST • FHIR</span>
            <span className="badge">Docker • Tomcat • CI/CD</span>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="card p-6 relative overflow-hidden"
        >
          <div className="absolute -right-10 -top-10 h-56 w-56 rounded-full bg-brand-600/20 blur-3xl" />
          <div className="absolute -left-6 -bottom-10 h-52 w-52 rounded-full bg-brand-400/10 blur-3xl" />
          <h3 className="text-xl font-semibold mb-4">Snapshot</h3>
          <ul className="space-y-3 text-neutral-700 dark:text-neutral-300">
            <li>• 5+ years building health & billing systems</li>
            <li>• Led QA & trained teams (ToT) across NGOs</li>
            <li>• Backend + Frontend specialist</li>
          </ul>
          <div className="mt-6 grid grid-cols-3 gap-3 text-center">
            <div className="card p-4"><div className="text-2xl font-bold">10x</div><div className="text-xs text-neutral-500 dark:text-neutral-400">Faster pages via API pagination</div></div>
            <div className="card p-4"><div className="text-2xl font-bold">99.9%</div><div className="text-xs text-neutral-500 dark:text-neutral-400">Uptime on deployments</div></div>
            <div className="card p-4"><div className="text-2xl font-bold">+NGOs</div><div className="text-xs text-neutral-500 dark:text-neutral-400">TASO • EGPAF • UPMB</div></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
