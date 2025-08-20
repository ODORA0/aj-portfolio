import React from 'react'

export default function Footer() {
  return (
    <footer className="border-t border-black/5 dark:border-white/10 py-10">
      <div className="container-2xl text-sm text-neutral-600 dark:text-neutral-400 flex flex-col sm:flex-row gap-2 sm:gap-0 items-center justify-between">
        <p>© {new Date().getFullYear()} AJAL ODORA JONATHAN</p>
        <div className="flex items-center gap-4">
          <a href="#about" className="hover:text-black dark:hover:text-white">About</a>
          <a href="#projects" className="hover:text-black dark:hover:text-white">Projects</a>
          <a href="#contact" className="hover:text-black dark:hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  )
}
