// import { assets } from '@/assets/assets'
// import Image from 'next/image'
// import Link from 'next/link'
// import React from 'react'

// const Sidebar = () => {
//   return (
//     <div className='flex flex-col bg-slate-100'>
//       <div className="px-2 sm:pl-14 py-3 border border-black">
//         <Image src={assets.logo1} width={120} alt='' />
//       </div>
//       <div className="w-28 sm:w-80 h-screen relative py-12 border border-black">
//         <div className="w-[50%] sm:w-[80%] absolute right-0">

//           <Link href="/admin/addProduct" className="flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000]">
//             <Image src={assets.add_icon} alt='' width={28} />
//             <p>Add blogs</p>
//           </Link>

//           <Link href="/admin/blogList" className="mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000]">
//             <Image src={assets.blog_icon} alt='' width={28} />
//             <p>Blog lists</p>
//           </Link>

//           <Link href="/admin/subscription" className="mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000]">
//             <Image src={assets.email_icon} alt='' width={28} />
//             <p>Subscription</p>
//           </Link>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Sidebar

import { assets } from '@/assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
  return (
    <div className='flex flex-col bg-[#004f5f] text-white min-h-screen border-r border-white/10'>
      
      {/* Logo Section */}
      <div className="px-6 py-6 sm:pl-12 border-b border-white/10 flex items-center justify-start">
        <Image 
          src={assets.logo1} 
          width={140} 
          alt='Logo' 
          className="brightness-0 invert" // Ensures logo is visible on dark background if it's black
        />
      </div>

      {/* Navigation Links */}
      <div className="w-28 sm:w-80 grow py-8 relative">
        <div className="w-[85%] sm:w-[90%] flex flex-col gap-3 absolute right-0">
          
          <Link 
            href="/admin/addProduct" 
            className="flex items-center gap-4 font-semibold px-4 py-3 bg-white/10 hover:bg-[#ffbb02] hover:text-[#004f5f] rounded-l-xl transition-all duration-300 group"
          >
            <Image 
              src={assets.add_icon} 
              alt='' 
              width={22} 
              className="group-hover:invert-0 transition-all"
            />
            <p className="hidden sm:block">Add blogs</p>
          </Link>

          <Link 
            href="/admin/blogList" 
            className="flex items-center gap-4 font-semibold px-4 py-3 bg-white/10 hover:bg-[#ffbb02] hover:text-[#004f5f] rounded-l-xl transition-all duration-300 group"
          >
            <Image 
              src={assets.blog_icon} 
              alt='' 
              width={22} 
              className="group-hover:invert-0 transition-all text-[#ffbb02]"
            />
            <p className="hidden sm:block">Blog lists</p>
          </Link>

          <Link 
            href="/admin/subscription" 
            className="flex items-center gap-4 font-semibold px-4 py-3 bg-white/10 hover:bg-[#ffbb02] hover:text-[#004f5f] rounded-l-xl transition-all duration-300 group"
          >
            <Image 
              src={assets.email_icon} 
              alt='' 
              width={22} 
              className="group-hover:invert-0 transition-all"
            />
            <p className="hidden sm:block">Subscription</p>
          </Link>

        </div>
      </div>
    </div>
  )
}

export default Sidebar