import mongoose from "mongoose";

const bloodRequestSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    hospitalName: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    bloodGroup: {
      type: String,
      required: true,
    },
    urgency: {
      type: String,
      enum: ["Low", "Medium", "High"],
      default: "Medium",
    },
    requestedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    status: {
      type: String,
      enum: ["Pending", "Approved", "Rejected"],
      default: "Pending",
    },
  },
  { timestamps: true }
);

export default mongoose.model("BloodRequest", bloodRequestSchema);
