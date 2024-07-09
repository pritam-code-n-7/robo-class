import mongoose from "mongoose";

const MONGO_URI = "mongodb://localhost:27017";

export const connectDB = async () => {
	try {
		const conn = await mongoose.connect(MONGO_URI, {
			dbName: "robo-class",
		});
		console.log(`MongoDB Connected: ${conn.connection.host}:${conn.connection.port}`);
	} catch (error) {
		console.error(`Error: ${error.message}`);
		process.exit(1);
	}
};
