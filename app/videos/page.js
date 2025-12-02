// import { connectDB } from '../../lib/db'
// export default async function Videos() {
//   const db = await connectDB()
//   const items = await db.collection('media').find({ type: 'video' }).sort({ createdAt:-1 }).toArray()
//   return (
//     <div>
//       <h2 className="text-2xl font-semibold mb-4">Project Videos</h2>
//       <div className="grid grid-cols-1 gap-6">
//         {items.map(v => <video key={v._id} src={v.url} controls className="w-full rounded shadow-sm" />)}
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

