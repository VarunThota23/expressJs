import mongoose, { ConnectOptions } from 'mongoose';

export const connectDB = async () => {
  try {
    const options:any= {
      useNewUrlParser: true,
      useUnifiedTopology: true
    };

    await mongoose.connect(process.env.MONGODB_URI as string, options);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};
