// import Link from 'next/link'
// import { connectDB } from '../../lib/db'
// export default async function Blog() {
//   const db = await connectDB()
//   const posts = await db.collection('posts').find().sort({ createdAt:-1 }).toArray()
//   return (
//     <div>
//       <h2 className="text-2xl font-semibold mb-4">Blog</h2>
//       <div className="space-y-4">
//         {posts.map(p => (
//           <article key={p._id} className="p-4 bg-white rounded shadow-sm">
//             <h3 className="font-semibold"><Link href={`/blog/${p._id}`}>{p.title}</Link></h3>
//             <p className="text-sm text-gray-600">{new Date(p.createdAt).toLocaleDateString()}</p>
//             <p className="mt-2 text-gray-700">{p.excerpt}</p>
//           </article>
//         ))}
//       </div>
//     </div>
//   )
// }

import React from 'react'

const page = () => {
  return (
    <div>page</div>
  )
}

export default page

