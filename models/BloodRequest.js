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
    units: {
      type: Number,
      required: true,
    },
    requiredDate: {
      type: Date,
      required: true,
    },
    notes: {
      type: String,
    },
    status: {
      type: String,
      enum: ["Pending", "Approved", "Rejected"],
      default: "Pending",
    },
    requestedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

const BloodRequest =
  mongoose.models.BloodRequest ||
  mongoose.model("BloodRequest", bloodRequestSchema);

export default BloodRequest;
