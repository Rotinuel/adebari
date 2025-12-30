import BlogItem from "./BlogItem"
import axios from "axios"
import { useEffect, useState } from "react"

const BlogList = () => {
    const [menu, setMenu] = useState("All")
    const [blogs, setBlogs] = useState([]);

    const fetchBlogs = async () => {
        const res = await axios.get('/api/blog');
        setBlogs(res.data.blogs);
        console.log(res.data.blogs)
    }

    useEffect(() => {
        fetchBlogs();
    }, [])

    return (
        <div>
            <div className="flex justify-center gap-6 my-10">
                <button onClick={() => setMenu('All')} className={menu === "All" ? 'bg-black text-white py-1 px-4 rounded-sm' : ""}>All</button>

                <button onClick={() => setMenu('Construction')} className={menu === "Construction" ? 'bg-black text-white py-1 px-4 rounded-sm' : ""}>Construction & Building</button>

                <button onClick={() => setMenu('Industry')} className={menu === "Industry" ? 'bg-black text-white py-1 px-4 rounded-sm' : ""}>Industry News & Tech</button>

                <button onClick={() => setMenu('Home')} className={menu === "Home" ? 'bg-black text-white py-1 px-4 rounded-sm' : ""}>Home Improvement/DIY</button>

                <button onClick={() => setMenu('Company')} className={menu === "Company" ? 'bg-black text-white py-1 px-4 rounded-sm' : ""}>Company/Business</button>

                <button onClick={() => setMenu('Green')} className={menu === "Green" ? 'bg-black text-white py-1 px-4 rounded-sm' : ""}>Substainability/Green Building</button>

            </div>
            <div className='flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24'>
                {blogs.filter((item) => menu === "All" ? true : item.category === menu).map((item, index) => {
                    return <BlogItem key={index} id={item._id} image={item.image} title={item.title} description={item.description} category={item.category} />
                })}
            </div>
        </div>
    )
}

export default BlogList