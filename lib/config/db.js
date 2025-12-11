import mongoose from "mongoose";

export const ConnectDb = async () => {
    await mongoose.connect(process.env.MONGO_URI)
}

// import mongoose from "mongoose";

// export const ConnectDb = async () => {
//     if (mongoose.connection.readyState === 1) {
//         console.log("Already connected");
//         return;
//     }

//     try {
//         await mongoose.connect(process.env.MONGO_URI, {
//             serverSelectionTimeoutMS: 5000,
//         });

//         console.log("MongoDB connected");
//     } catch (err) {
//         console.error("MongoDB connection error:", err.message);
//     }
// };
