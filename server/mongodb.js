import mongoose from "mongoose";
const connectDB=async ()=>{
    mongoose.conncetion.on('connected',()=> console.log('Database Connected'))
    await mongoose.connected(`{process.env.MONGODB_URI}/lms`)
}
export default connectDB