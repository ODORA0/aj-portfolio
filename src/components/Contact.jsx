import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { Mail, Send } from 'lucide-react'

/**
 * Check the .env file in the project root with:
 * VITE_EMAILJS_SERVICE_ID=your_service_id
 * VITE_EMAILJS_TEMPLATE_ID=your_template_id
 * VITE_EMAILJS_PUBLIC_KEY=your_public_key
 *
 * Templates for the EmailJS with fields: user_name, user_email, message
 * Set the template to send to: jonathanodoraaj@gmail.com
 */
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

export default function Contact() {
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function onSubmit(e) {
    e.preventDefault()
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus('error'); setErrorMsg('Email service not configured. See README for setup.')
      return
    }
    setStatus('sending')
    try {
      const res = await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, { publicKey: PUBLIC_KEY })
      if (res.status === 200) {
        setStatus('sent')
        formRef.current.reset()
      } else {
        setStatus('error'); setErrorMsg('Failed to send. Try again later.')
      }
    } catch (err) {
      setStatus('error')
      setErrorMsg(err?.text || 'Failed to send.')
    }
  }

  return (
    <section id="contact" className="section border-t border-black/5 dark:border-white/10">
      <div className="container-2xl">
        <h2 className="text-2xl sm:text-3xl font-bold">Let’s Work Together</h2>
        <p className="mt-3 text-neutral-700 dark:text-neutral-300 max-w-2xl">
          Open to full-time roles and impactful projects. Reach out and I’ll respond promptly.
        </p>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <form ref={formRef} onSubmit={onSubmit} className="card p-6 space-y-4">
            <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
              <Mail className="h-4 w-4" /> Your message will be sent directly to <a className="link-muted" href="mailto:jonathanodoraaj@gmail.com">jonathanodoraaj@gmail.com</a>
            </div>
            <input name="user_name" required placeholder="Your name"
              className="w-full px-4 py-3 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10"/>
            <input name="user_email" type="email" required placeholder="Email address"
              className="w-full px-4 py-3 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10"/>
            <textarea name="message" rows="5" required placeholder="Message"
              className="w-full px-4 py-3 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10" />
            <button
              disabled={status==='sending'}
              className="btn btn-primary disabled:opacity-70 disabled:cursor-not-allowed">
              {status==='sending' ? 'Sending…' : <>Send <Send className="h-4 w-4" /></>}
            </button>
            {status==='sent' && <p className="text-sm text-green-600">Message sent! I’ll get back to you soon.</p>}
            {status==='error' && <p className="text-sm text-red-600">{errorMsg}</p>}
          </form>
          <div className="card p-6">
            <h3 className="font-semibold">Direct</h3>
            <ul className="mt-4 space-y-2 text-neutral-700 dark:text-neutral-300">
              <li>Email: <a className="underline decoration-dotted" href="mailto:jonathanodoraaj@gmail.com">jonathanodoraaj@gmail.com</a></li>
              <li>GitHub: <a className="underline decoration-dotted" href="https://github.com/ODORA0" target="_blank" rel="noreferrer">github.com/ODORA0</a></li>
              <li>LinkedIn: <a className="underline decoration-dotted" href="https://www.linkedin.com/in/ajal-odora-jonathan-988805231/" target="_blank" rel="noreferrer">linkedin.com/in/ajal-odora-jonathan-988805231</a></li>
              <li>Location: Kampala, Uganda</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
