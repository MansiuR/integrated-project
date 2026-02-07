import mongoose from 'mongoose';
import dns from 'dns';
 
// 1. DNS fix for your SRV resolution issue
dns.setServers(['8.8.8.8', '8.8.4.4']);

function connectDB(){
  mongoose.connect(process.env.MONGO_URI)
  console.log("connected To DB");
  
}

export default connectDB