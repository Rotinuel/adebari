import Image from 'next/image'
import { assets } from '@/assets/assets'
import { Trash2 } from "lucide-react";


const BlogTableItems = ({ authorImg, title, author, date, deleteBlog, mongoId }) => {
    const BlogDate = new Date(date);
    // BlogDate.setDate(BlogDate.getDate() + 10);
    return (
        <tr className='bg-white border-b'>
            <th scope='row' className='items-center gap-3 hidden sm:flex px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
                <Image width={40} height={40} src={authorImg ? authorImg : assets.profile_icon} />
                <p>{author?author:"No Author"}</p>
            </th>
            <td className='px-6 py-4'>
                {title ? title : "no title"}
            </td>
            <td className='px-6 py-4'>
                {BlogDate.toDateString()}
            </td>
            <td className='px-6 py-4 cursor-pointer'>
                <button 
                    onClick={() => deleteBlog(mongoId)}
                    className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
                >
                    <Trash2 size={18} />
                </button>
            </td>
        </tr>
    )
}

export default BlogTableItems