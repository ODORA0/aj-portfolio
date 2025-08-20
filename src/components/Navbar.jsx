import React from 'react'
import ThemeToggle from './ThemeToggle.jsx'
import { Github, Linkedin, FileDown } from 'lucide-react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#testimonials', label: 'Impact' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 dark:border-white/10 bg-white/70 dark:bg-black/40 backdrop-blur">
      <div className="container-2xl flex h-16 items-center justify-between">
        <a href="#" className="text-lg font-semibold tracking-tight">
          <span className="gradient-text">Ajal Odora Jonathan</span> • Full-Stack
        </a>
        <nav className="hidden md:flex items-center gap-3 text-sm text-neutral-700 dark:text-neutral-300">
          {links.map(l => (
            <a key={l.href} href={l.href} className="hover:text-black dark:hover:text-white transition-colors px-2 py-1 rounded-md">
              {l.label}
            </a>
          ))}
          <a href="/resume.pdf" download className="btn" title="Download CV">
            <FileDown className="h-4 w-4" /> CV
          </a>
          <a href="https://github.com/ODORA0" target="_blank" className="btn" title="GitHub">
            <Github className="h-4 w-4" /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/ajal-odora-jonathan-988805231/" target="_blank" className="btn" title="LinkedIn">
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
          <a href="#contact" className="btn btn-primary">
            Hire me
          </a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
