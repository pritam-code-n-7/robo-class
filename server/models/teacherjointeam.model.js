import { Schema, model } from "mongoose";

const teacherJoinTeamSchema = new Schema(
	{
		email: {
			type: String,
			required: [true, "Email is required"],
			unique: true,
			lowercase: true,
			trim: true,
		},
		fullName: {
			type: String,
			required: [true, "Full Name is required"],
		},
		phoneNumber: {
			type: String,
			required: [true, "Phone Number is required"],
			min:[10,"It must be 10 digit phone number"]
		},
		message: {
			type: String,
			required: [true, "Message is required"],
		},
	},
	{ timestamps: true }
);

export const TeamTeacher = model("TeamTeacher", teacherJoinTeamSchema);
