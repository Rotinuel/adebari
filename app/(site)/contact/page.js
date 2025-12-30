// 'use client'
// import { useState } from 'react'
// export default function Contact() {
//   const [form, setForm] = useState({ name: '', email: '', message: '' })
//   const [status, setStatus] = useState('')
//   async function submit(e) {
//     e.preventDefault()
//     setStatus('sending')
//     const res = await fetch('/api/contact', { method: 'POST', body: JSON.stringify(form), headers: {'Content-Type':'application/json'} })
//     if (res.ok) setStatus('sent')
//     else setStatus('error')
//   }
//   return (
//     <div className="max-w-2xl">
//       <h2 className="text-2xl font-semibold">Contact Us</h2>
//       <form onSubmit={submit} className="mt-4 space-y-4 bg-white p-6 rounded shadow-sm">
//         <input value={form.name} onChange={e=>setForm({...form, name:e.target.value})} required placeholder="Your name" className="w-full p-3 border rounded" />
//         <input value={form.email} onChange={e=>setForm({...form, email:e.target.value})} required placeholder="Your email" className="w-full p-3 border rounded" />
//         <textarea value={form.message} onChange={e=>setForm({...form, message:e.target.value})} required rows={6} placeholder="Message" className="w-full p-3 border rounded" />
//         <div className="flex items-center gap-4">
//           <button type="submit" className="px-4 py-2 bg-sky-600 text-white rounded">Send message</button>
//           {status==='sending' && <span>Sending...</span>}
//           {status==='sent' && <span className="text-green-600">Message sent — we'll reply soon.</span>}
//           {status==='error' && <span className="text-red-600">Failed to send. Try again later.</span>}
//         </div>
//       </form>
//     </div>
//   )
// }


"use client";

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, sending, sent, error

  async function submit(e) {
    e.preventDefault();
    setStatus('sending');
    
    try {
      const res = await fetch('/api/contact', { 
        method: 'POST', 
        body: JSON.stringify(form), 
        headers: { 'Content-Type': 'application/json' } 
      });
      
      if (res.ok) {
        setStatus('sent');
        setForm({ name: '', email: '', subject: '', message: '' }); // Reset form
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  }

  return (
    <section className="bg-gray-900 text-white py-24 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-0.5 bg-[#55a630]" />
            <span className="uppercase tracking-widest text-sm text-gray-400">Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let’s Discuss Your <span className="text-[#55a630]">Next Project</span></h2>
          <p className="text-gray-400 max-w-2xl text-lg">
            Whether you're looking for a quote or just want to chat about a future build, our team is ready to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Column 1: Contact Info */}
          <div className="space-y-8">
            <ContactInfoCard 
              icon={<Phone className="text-[#55a630]" />}
              title="Call Us"
              detail="+234 905 632 9716"
              subDetail="Mon-Fri: 8am - 6pm"
            />
            <ContactInfoCard 
              icon={<Mail className="text-[#55a630]" />}
              title="Email Us"
              detail="info@adebarikonsults.com"
              subDetail="We reply within 24 hours"
            />
            <ContactInfoCard 
              icon={<MapPin className="text-[#55a630]" />}
              title="Visit Office"
              detail="123 Construction Way, Lagos"
              subDetail="Nigeria"
            />
          </div>

          {/* Column 2 & 3: Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={submit} className="bg-gray-800/40 p-8 md:p-10 rounded-2xl border border-white/5 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Your Name</label>
                  <input 
                    value={form.name} 
                    onChange={e => setForm({...form, name: e.target.value})}
                    required 
                    placeholder="John Doe" 
                    className="w-full bg-white/5 border border-white/10 rounded-lg p-4 focus:border-[#55a630] outline-none transition"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Email Address</label>
                  <input 
                    type="email"
                    value={form.email} 
                    onChange={e => setForm({...form, email: e.target.value})}
                    required 
                    placeholder="john@example.com" 
                    className="w-full bg-white/5 border border-white/10 rounded-lg p-4 focus:border-[#55a630] outline-none transition"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Subject</label>
                <input 
                  value={form.subject} 
                  onChange={e => setForm({...form, subject: e.target.value})}
                  required 
                  placeholder="Project Inquiry" 
                  className="w-full bg-white/5 border border-white/10 rounded-lg p-4 focus:border-[#55a630] outline-none transition"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Message</label>
                <textarea 
                  value={form.message} 
                  onChange={e => setForm({...form, message: e.target.value})}
                  required 
                  rows={5} 
                  placeholder="Tell us about your project..." 
                  className="w-full bg-white/5 border border-white/10 rounded-lg p-4 focus:border-[#55a630] outline-none transition resize-none"
                />
              </div>

              <button 
                type="submit" 
                disabled={status === 'sending'}
                className="w-full md:w-auto px-10 py-4 bg-[#55a630] text-white font-bold rounded-lg flex items-center justify-center gap-2 hover:bg-[#4b952c] transition disabled:opacity-50"
              >
                {status === 'sending' ? (
                  <><Loader2 className="animate-spin" size={20} /> Sending...</>
                ) : (
                  <><Send size={20} /> Send Message</>
                )}
              </button>

              {/* Status Notifications */}
              {status === 'sent' && (
                <div className="flex items-center gap-2 text-green-400 bg-green-400/10 p-4 rounded-lg">
                  <CheckCircle2 size={20} /> Message sent successfully! We'll be in touch.
                </div>
              )}
              {status === 'error' && (
                <div className="flex items-center gap-2 text-red-400 bg-red-400/10 p-4 rounded-lg">
                  <AlertCircle size={20} /> Something went wrong. Please try again later.
                </div>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

// Sub-component for contact info
function ContactInfoCard({ icon, title, detail, subDetail }) {
  return (
    <div className="flex items-start gap-5 p-6 bg-gray-800/40 rounded-xl border border-white/5">
      <div className="w-12 h-12 bg-[#55a630]/10 rounded-lg flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="text-lg font-semibold">{title}</h4>
        <p className="text-white mt-1">{detail}</p>
        <p className="text-gray-500 text-sm">{subDetail}</p>
      </div>
    </div>
  );
}