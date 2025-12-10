'use client'
import { useState } from 'react'
export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')
  async function submit(e) {
    e.preventDefault()
    setStatus('sending')
    const res = await fetch('/api/contact', { method: 'POST', body: JSON.stringify(form), headers: {'Content-Type':'application/json'} })
    if (res.ok) setStatus('sent')
    else setStatus('error')
  }
  return (
    <div className="max-w-2xl">
      <h2 className="text-2xl font-semibold">Contact Us</h2>
      <form onSubmit={submit} className="mt-4 space-y-4 bg-white p-6 rounded shadow-sm">
        <input value={form.name} onChange={e=>setForm({...form, name:e.target.value})} required placeholder="Your name" className="w-full p-3 border rounded" />
        <input value={form.email} onChange={e=>setForm({...form, email:e.target.value})} required placeholder="Your email" className="w-full p-3 border rounded" />
        <textarea value={form.message} onChange={e=>setForm({...form, message:e.target.value})} required rows={6} placeholder="Message" className="w-full p-3 border rounded" />
        <div className="flex items-center gap-4">
          <button type="submit" className="px-4 py-2 bg-sky-600 text-white rounded">Send message</button>
          {status==='sending' && <span>Sending...</span>}
          {status==='sent' && <span className="text-green-600">Message sent — we'll reply soon.</span>}
          {status==='error' && <span className="text-red-600">Failed to send. Try again later.</span>}
        </div>
      </form>
    </div>
  )
}
