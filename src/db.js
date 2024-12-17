import mongoose from "mongoose";

export const connectDB=async()=>{
    try {
        mongoose.set('strictQuery', false);
        var db = "mongodb://localhost/moebiusDB";
        await mongoose.connect(db);
        console.log('Database connected:', db)
    }catch(error){
        console.log(error);
    }
}
