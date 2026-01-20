import mongoose from "mongoose";

const ambulanceSchema = new mongoose.Schema(
  {
    hospital: {
      type: String,
      required: true,
    },

    city: {
      type: String,
      required: true,
    },

    available: {
      type: Boolean,
      default: true,
    },

    driverName: {
      type: String,
      required: true,
    },

    contactNumber: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("AmbulanceService", ambulanceSchema);
