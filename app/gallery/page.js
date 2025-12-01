import { connectDB } from '../../lib/db'
export default async function Gallery() {
  const db = await connectDB()
  const items = await db.collection('media').find({ type: 'image' }).sort({ createdAt:-1 }).toArray()
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Project Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {items.map(i => <img key={i._id} src={i.url} alt={i.caption||'project'} className="w-full h-60 object-cover rounded shadow-sm" />)}
      </div>
    </div>
  )
}
