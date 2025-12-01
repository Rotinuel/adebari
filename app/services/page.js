export default function Services() {
  const services = ['Residential Construction','Commercial Construction','Structural Engineering','Renovation & Remodeling','Project Management']
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {services.map(s => <div key={s} className="p-6 bg-white rounded shadow-sm">{s}</div>)}
      </div>
    </div>
  )
}
