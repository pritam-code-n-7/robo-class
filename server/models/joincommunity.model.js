import { Schema, model } from "mongoose";

const joinCommunitySchema = new Schema(
	{
		email: {
			type: String,
			required: [true, "Email is required"],
			unique: true,
			lowercase: true,
			trim: true,
		},
	},
	{ timestamps: true }
);

export const JoinCommunity = model("JoinCommunity", joinCommunitySchema);
