'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
export default function AdminPage() {
  const [session, setSession] = useState(null)
  const router = useRouter()
  useEffect(()=>{
    fetch('/api/auth/session').then(r=>r.json()).then(j=>{
      if (!j) router.push('/api/auth/signin')
      else setSession(j)
    })
  },[])
  if (!session) return <div>Checking auth...</div>
  return (
    <div>
      <h2 className="text-2xl font-semibold">Admin Dashboard</h2>
      <div className="mt-4 space-y-3">
        <a className="block p-3 bg-white rounded shadow-sm" href="/admin/new-post">New Post</a>
        <a className="block p-3 bg-white rounded shadow-sm" href="/admin/upload-media">Upload Media</a>
      </div>
    </div>
  )
}
