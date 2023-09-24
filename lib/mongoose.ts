import mongoose from "mongoose";

let isConnected = false;
export const connecToDB = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URL) return console.log("mongodb url not found");
  if(isConnected) return console.log('Already to connected to mongodb');

  try {
    await mongoose.connect(process.env.MONGODB_URL);

    isConnected = true;
    console.log('connected to mongodb');
    
  } catch (error) {
    console.log(error);
    
  }
  
};
