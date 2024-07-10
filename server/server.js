import express from "express";
import cors from "cors";
import { connectDB } from "./config/database/connectMongoDB.js";
import { FreeClass } from "./models/bookfreeclass.model.js";
import { JoinCommunity } from "./models/joincommunity.model.js";
import { TeamTeacher } from "./models/teacherjointeam.model.js";

const app = express();

// mongodb connection
connectDB();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
	origin:"https://robo-class-frontend.vercel.app",
	methods:["POST","GET"],
	credentials:true,
}));

// routes
app.get("/", (req, res) => {
	res.send("Hello World. This route is for testing only.");
});

app.post("/join-free-class", async (req, res) => {
	try {
		const { parentEmail, childName, childAge, parentPhoneNumber } = req.body;

		if ([parentEmail, childName, childAge, parentPhoneNumber].some((field) => field.trim() === "")) {
			return res.status(400).json({ success: false, status: 400, message: "All fields are required" });
		}
	
		const existingUser = await FreeClass.findOne({ parentEmail });

		if (existingUser) {
			return res.status(409).json({
				success: false,
				status: 409,
				message: "User with this email already exists. Try with different one.",
			});
		}

		await FreeClass.create({
			parentEmail,
			childName,
			childAge,
			parentPhoneNumber,
		});

		return res.status(201).json({
			success: true,
			status: 200,
			message: "Thank you for getting in touch! One of our colleagues will get back in touch with you soon!",
		});
	} catch (error) {
		console.error(`Error: ${error.message}`);
		return res.status(500).json({ success: false, status: 500, message: "Server Error. Please try again." });
	}
});

app.post("/join-community", async (req, res) => {
	try {
		const { email } = req.body;
		if (!email) {
			return res.status(400).json({ success: false, status: 400, message: "Email is required" });
		}
		const existingUser = await JoinCommunity.findOne({ email });

		if (existingUser) {
			return res.status(409).json({
				success: false,
				status: 409,
				message: "User with this email already exists. Try with different one.",
			});
		}
		await JoinCommunity.create({
			email,
		});

		return res.status(201).json({
			success: true,
			status: 201,
			message: "Thank you for getting in touch! One of our colleagues will get back in touch with you soon!",
		});
	} catch (error) {
		console.error(`Error: ${error.message}`);
		return res.status(500).json({ success: false, status: 500, message: "Server Error. Please try again." });
	}
});

app.post("/join-teacher-team", async (req, res) => {
	try {
		const { email, fullName, phoneNumber, message } = req.body;

		if ([email, fullName, phoneNumber, message].some((field) => field.trim() === "")) {
			return res.status(400).json({ success: false, status: 400, message: "All fields are required" });
		}

		const existingTeacher = await TeamTeacher.findOne({ email });

		if (existingTeacher) {
			return res.status(409).json({
				success: false,
				status: 409,
				message: "User with this email already exists. Try with different one.",
			});
		}

		await TeamTeacher.create({
			email,
			fullName,
			phoneNumber,
			message,
		});

		return res.status(201).json({
			success: true,
			status: 201,
			message: "Thank you for getting in touch! One of our colleagues will get back in touch with you soon!",
		});
	} catch (error) {
		console.error(`Error: ${error.message}`);
		return res.status(500).json({ success: false, status: 500, message: "Server Error. Please try again." });
	}
});

const PORT = 3000;
app.listen(PORT, () => {
	console.log(`Server is running on port http://localhost:${PORT}`);
});
