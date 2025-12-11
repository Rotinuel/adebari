import { ConnectDb } from "@/lib/config/db"
import BlogModel from "@/lib/models/BlogModel";
import { NextResponse } from "next/server"
import { writeFile } from "fs/promises"

const LoadDB = async () => {
    await ConnectDb();
}


LoadDB();



export async function GET(req) {
    return NextResponse.json({ msg: "Api working" })
}

export async function POST(req) {
    const formData = await req.formData();
    const timestamp = Date.now();

    const image = formData.get('image');

    // SAFETY CHECK: ensure image is a File
    if (!image || typeof image.arrayBuffer !== "function") {
        console.log("Received image:", image);
        return NextResponse.json(
            { error: "Invalid image. Must upload a real file." },
            { status: 400 }
        );
    }

    // Convert File to buffer
    const imageByteData = await image.arrayBuffer();
    const buffer = Buffer.from(imageByteData);

    const path = `./public/${timestamp}_${image.name}`;
    await writeFile(path, buffer);
    const imgUrl = `/${timestamp}_${image.name}`
    console.log(imgUrl);

    const blogData = {
        title: `${formData.get('title')}`,
        description: `${formData.get('description')}`,
        category: `${formData.get('category')}`,
        author: `${formData.get('author')}`,
        image: `${imgUrl}`,
        authorImg: `${formData.get('authorImg')}`,
    }

    
    await BlogModel.create(blogData);
    console.log("Blog saved")

    return NextResponse.json({ success: true, msg: "Blog Added" })

}