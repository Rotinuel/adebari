import BlogItem from "./BlogItem"
import axios from "axios"
import { useEffect, useState } from "react"

const BlogList = () => {
    const [menu, setMenu] = useState("All")
    const [blogs, setBlogs] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // 1. Add loading state

    const fetchBlogs = async () => {
        setIsLoading(true); // Start loading
        try {
            const res = await axios.get('/api/blog');
            setBlogs(res.data.blogs);
        } catch (error) {
            console.error("Error fetching blogs:", error);
        } finally {
            setIsLoading(false); // Stop loading regardless of success or error
        }
    }

    useEffect(() => {
        fetchBlogs();
    }, [])

    return (
        <div className="px-4 sm:px-8 md:px-12 lg:px-24">
            {/* Category Menu */}
            <div className="flex justify-start md:justify-center gap-3 md:gap-6 my-10 overflow-x-auto pb-4 scrollbar-hide whitespace-nowrap">
                {["All", "Construction & Building", "Industry News & Tech", "Home Improvement / DIY", "Company & Business", "Substainability / Green Building"].map((category) => (
                    <button 
                        key={category}
                        onClick={() => setMenu(category)} 
                        className={menu === category ? 'bg-black text-white py-1 px-4 rounded-sm' : "py-1 px-4 hover:bg-gray-100 rounded-sm"}>
                        {category === "Green" ? "Sustainability" : category}
                    </button>
                ))}
            </div>

            {/* Conditional Rendering: Spinner or Grid */}
            {isLoading ? (
                <div className="flex justify-center items-center min-h-[40vh]">
                    {/* Simple Tailwind Spinner */}
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black"></div>
                </div>
            ) : (
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-10 mb-16'>
                    {blogs
                        .filter((item) => menu === "All" ? true : item.category === menu)
                        .map((item, index) => (
                            <div key={index} className="flex justify-center">
                                <BlogItem 
                                    id={item._id} 
                                    image={item.image} 
                                    title={item.title} 
                                    description={item.description} 
                                    category={item.category} 
                                />
                            </div>
                        ))
                    }
                </div>
            )}
        </div>
    )
}

export default BlogList