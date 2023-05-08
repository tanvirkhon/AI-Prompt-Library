import mongoose from "mongoose";

let isConnected = false; // Track the connection status

export const connectToDB = async () => {
  mongoose.set("strictQuery", true); // Set strictQuery to true to allow Mongoose to throw errors

  if (isConnected) {
    console.log("Database is already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "share_prompt",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
    console.log("Database is connected");
  } catch (error) {
    console.log(error);
  }
};
