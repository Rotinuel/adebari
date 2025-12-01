'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
export default function NewPost() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const router = useRouter()
  async function submit(e) {
    e.preventDefault()
    await fetch('/api/admin/posts', { method: 'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ title, content }) })
    router.push('/admin')
  }
  return (
    <div className='h-screen'>
    <form onSubmit={submit} className="space-y-4">
      <input required className="w-full p-3 border rounded" placeholder="Title" value={title} onChange={e=>setTitle(e.target.value)} />
      <textarea required className="w-full p-3 border rounded" placeholder="HTML content" value={content} onChange={e=>setContent(e.target.value)} rows={10} />
      <button className="px-4 py-2 bg-sky-600 text-white rounded">Create Post</button>
    </form>
    </div>
  )
}
