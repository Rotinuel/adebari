// import { connectDB } from '../../../lib/db'
// import { ObjectId } from 'mongodb'
// export default async function Post({ params }) {
//   const db = await connectDB()
//   const post = await db.collection('posts').findOne({ _id: new ObjectId(params.id) })
//   return (
//     <article className="prose max-w-none h-screen">
//       <h1>{post.title}</h1>
//       <p className="text-sm text-gray-600">{new Date(post.createdAt).toLocaleDateString()}</p>
//       <div dangerouslySetInnerHTML={{ __html: post.content }} />
//     </article>
//   )
// }

import React from 'react'

const page = () => {
  return (
    <div>page</div>
  )
}

export default page
