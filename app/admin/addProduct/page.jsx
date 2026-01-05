"use client"
import { assets } from '@/assets/assets'
import axios from 'axios'
import Image from "next/image"
import { useState } from 'react'
import { toast } from 'react-toastify'

const page = () => {

  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    title: "",
    description: "",
    content: "",
    category: "",
    author: "Adedolapo Samson Ogunleye",
    authorImg: "/author_icon.png",
  })

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }));
    console.log(data);
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('description', data.description);
    formData.append('content', data.content);
    formData.append('category', data.category);
    formData.append('author', data.author);
    formData.append('authorImg', data.authorImg);
    formData.append('image', image);

    const res = await axios.post('/api/blog', formData);
    if (res.data.success) {
      toast.success(res.data.msg)
      setImage(false);
      setData({
        title: "",
        description: "",
        category: "",
        author: "Adedolapo Samson Ogunleye",
        authorImg: "/author_icon.png",
      });
    } else {
      toast.error("Error")
    }
  }

  return (
    <>
      <form onSubmit={onSubmitHandler} className='pt-5 px-5 sm:pt-12 sm:pl-16'>
        <p className='text-xl'>Upload thumbnail</p>
        <label htmlFor="image">
          <Image className="mt-4" src={!image ? assets.upload_area : URL.createObjectURL(image)} width={140} height={70} />
        </label>

        <input onChange={(e) => setImage(e.target.files[0])} type="file" id='image' hidden required />

        <p className="text-xl mt-4">Blog title</p>
        <input type="text" name="title" onChange={onChangeHandler} value={data.title} className="w-full sm:w-[500px] mt-4 px-4 py-3 border" placeholder='Type here' required />

        <p className="text-xl mt-4">Blog Description</p>
        <textarea type="text" name="description" onChange={onChangeHandler} value={data.description} className="w-full sm:w-[500px] mt-4 px-4 py-3 border" placeholder='write content here' rows={6} required />

        <p className="text-xl mt-4">Main Blog Content</p>
        <textarea
          name="content"
          onChange={onChangeHandler}
          value={data.content}
          className="w-full sm:w-[500px] mt-4 px-4 py-3 border"
          placeholder='Write the full blog post here...'
          rows={12}
          required
        />

        <p className="text-xl mt-4">Blog Category</p>
        <select name="category" onChange={onChangeHandler} value={data.category} className='w-60 mt-4 px-4 py-3 border text-gray-500'>
          <option value="Construction">Construction & Building</option>
          <option value="Industry">Industry News & Tech</option>
          <option value="Design">Design Architecture</option>
          <option value="Home">Home Improvement/DIY</option>
          <option value="Company">Company/Business</option>
          <option value="Green">Sustainability/Green Building</option>
        </select>
        <br />
        <button type="submit" className='mt-8 w-60 h-12 bg-black text-white mb-8'>ADD</button>

      </form>

    </>
  )
}

export default page