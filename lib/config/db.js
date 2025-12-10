import mongoose from "mongoose";

export const ConnectDb = async ()=>{
    await mongoose.connect('mongodb+srv://xiotwork_db_user:qcLzXBmBoGmHCP07@adebarikonsult-cluster.wenzaru.mongodb.net/?appName=adebarikonsult-cluster')
}