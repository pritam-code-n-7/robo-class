import { Schema, model } from "mongoose";

const bookFreeClassSchema = new Schema(
	{
		parentEmail: {
			type: String,
			required: [true, "Parent's email is required"],
			unique: true,
			lowercase: true,
			trim: true,
		},
		childName: {
			type: String,
			required: [true, "Child name is required"],
		},
		childAge: {
			type: String,
			required: [true, "Child age is required"],
		},
		parentPhoneNumber: {
			type: String,
			required: [true, "Parent's phone number is required"],
			min:[10,"It must be 10 digit phone number"]
		},
	},
	{ timestamps: true }
);

export const FreeClass = model("FreeClass", bookFreeClassSchema);
