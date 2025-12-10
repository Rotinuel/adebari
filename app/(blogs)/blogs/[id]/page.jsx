'use client'

import { assets, blog_data } from '@/assets/assets'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Page() {
    const params = useParams()
    const [data, setData] = useState(null)

    useEffect(() => {
        if (!params?.id) return

        const id = Array.isArray(params.id)
            ? Number(params.id[0])
            : Number(params.id)

        const blog = blog_data.find(item => item.id === id)

        setData(blog || null)
    }, [params])

    if (!data) return <div className="p-10">Blog not found</div>

    return (
        <>
            <div className="bg-gray-200 py-5 px-5 md:px-13 lg:px-28">
                <div className="text-center my-24">
                    <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto">
                        {data.title}
                    </h1>
                    <Image src={data.author_img} className='mx-auto mt-6 border border-white rounded-full' width={60} height={60} alt='' />
                    <p className='mt-1 pb-2 text-lg max-w-[740px] mx-auto'>{data.author}</p>
                </div>
            </div>
            <div className="mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10">
                <Image className='mx-auto border-4 border-white' priority src={data.image} width={1280} height={720} alt='' />
                <h1 className='my-8 text-[26px] font-semibold'>Introduction:</h1>
                <p>{data.description}</p>
                <h3 className='my-5 text-[18px] font-semibold'>Lorem ipsum dolor sit amet.</h3>
                <p className='my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, exercitationem?</p>
                <p className='my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, exercitationem?</p>

                <h3 className='my-5 text-[18px] font-semibold'>Lorem ipsum dolor sit amet.</h3>
                <p className='my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, exercitationem?</p>
                <p className='my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, exercitationem?</p>

                <div className="my-24">
                    <p className='text-black font-semibold my-4'>Share this article on social media</p>
                    <div className="flex">
                        <Image src={assets.facebook_icon} width={50} height={50} alt=''/>
                        <Image src={assets.twitter_icon} width={50} height={50} alt=''/>
                        <Image src={assets.googleplus_icon} width={50} height={50} alt=''/>
                    </div>
                </div>

            </div>
        </>

    )
}
