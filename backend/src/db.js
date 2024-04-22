import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose
      .connect(process.env.MONGODB_KEY) //base de datos
      .then(() => console.log("Connected to MongoDB ATLAS"))
      .catch((err) => console.log(err));
  } catch (e) {
    console.log(e);
  }
};
