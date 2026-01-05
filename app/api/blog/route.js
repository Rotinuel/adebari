import { ConnectDb } from "@/lib/config/db"
import BlogModel from "@/lib/models/BlogModel";
import { NextResponse } from "next/server"
import { writeFile } from "fs/promises"
import fs from "fs"
import { NodeNextResponse } from "next/dist/server/base-http/node";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const LoadDB = async () => {
    await ConnectDb();
}


LoadDB();


// API ENDPOINT TO GET ALL BLOGS
export async function GET(req) {

    const blogId = req.nextUrl.searchParams.get("id")
    if (blogId) {
        const blog = await BlogModel.findById(blogId);
        return NextResponse.json(blog);
    }
    else {
        const blogs = await BlogModel.find({});
        return NextResponse.json({ blogs })
    }
}

// API ENDPOINT FOR UPLOADING BLOGS
// export async function POST(req) {
//     const formData = await req.formData();
//     const timestamp = Date.now();

//     const image = formData.get('image');

//     // SAFETY CHECK: ensure image is a File
//     if (!image || typeof image.arrayBuffer !== "function") {
//         console.log("Received image:", image);
//         return NextResponse.json(
//             { error: "Invalid image. Must upload a real file." },
//             { status: 400 }
//         );
//     }

//     // Convert File to buffer
//     const imageByteData = await image.arrayBuffer();
//     const buffer = Buffer.from(imageByteData);

//     const path = `./public/${timestamp}_${image.name}`;
//     await writeFile(path, buffer);
//     const imgUrl = `/${timestamp}_${image.name}`
//     console.log(imgUrl);

//     const blogData = {
//         title: `${formData.get('title')}`,
//         description: `${formData.get('description')}`,
//         category: `${formData.get('category')}`,
//         author: `${formData.get('author')}`,
//         image: `${imgUrl}`,
//         authorImg: `${formData.get('authorImg')}`,
//     }


//     await BlogModel.create(blogData);
//     console.log("Blog saved")

//     return NextResponse.json({ success: true, msg: "Blog Added" })

// }

export async function POST(req) {
  try {
    const formData = await req.formData();
    const image = formData.get("image");

    if (!image) {
      return NextResponse.json({ error: "No image uploaded" }, { status: 400 });
    }

    // Convert File to buffer for Cloudinary
    const imageByteData = await image.arrayBuffer();
    const buffer = Buffer.from(imageByteData);

    // Upload to Cloudinary using a Promise
    const uploadResponse = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream({ resource_type: "image", folder: "blogs" }, (error, result) => {
        if (error) reject(error);
        else resolve(result);
      }).end(buffer);
    });

    const blogData = {
      title: `${formData.get("title")}`,
      description: `${formData.get("description")}`,
      category: `${formData.get("category")}`,
      author: `${formData.get("author")}`,
      image: uploadResponse.secure_url, // URL from Cloudinary
      authorImg: `${formData.get("authorImg")}`,
    };

    await BlogModel.create(blogData);
    return NextResponse.json({ success: true, msg: "Blog Added" });

  } catch (error) {
    console.error("Cloudinary/DB Error:", error);
    return NextResponse.json({ success: false, msg: "Server Error" }, { status: 500 });
  }
}

// Deleting Api Endpoint
// export async function DELETE(req) {
//     const id = await req.nextUrl.searchParams.get('id');
//     const blog = await BlogModel.findById(id);
//     fs.unlink('./public${blog.image}', () => { });
//     await BlogModel.findByIdAndDelete(id);
//     return NodeNextResponse.json({ success: true, msg: "Blog Deleted" })
// }

export async function DELETE(req) {
  const id = req.nextUrl.searchParams.get("id");
  const blog = await BlogModel.findById(id);

  if (!blog) {
    return NextResponse.json({ success: false, msg: "Blog not found" }, { status: 404 });
  }

  // Optional: Add logic here to delete from Cloudinary if needed
  
  await BlogModel.findByIdAndDelete(id);
  return NextResponse.json({ success: true, msg: "Blog Deleted" });
}