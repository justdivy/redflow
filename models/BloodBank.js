import mongoose from "mongoose";

const bloodBankSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    address: String,
    city: String,
    contactNumber: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    bloodTypes: [
      {
        type: String,
        enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
        required: true,
      },
    ],
    createBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);



export default mongoose.model("BloodBank", bloodBankSchema);
