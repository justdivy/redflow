import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add your name"],
    },

    email: {
      type: String,
      required: [true, "Please add an email"],
    },

    password: {
      type: String,
      required: [true, "Please add a password"],
    },

    // phone: {
    //   type: String,
    //   required: [true, "Please add your phone number"],
    // },

    bloodGroup: {
      type: String,
      required: [true, "Please add a blood group"],
    },

    role: {
      type: String,
      enum: ["donor", "patient", "admin"],
      default: "donor",
    },

    // createAt: {
    //   type: Date,
    //   default: Date.now,
    // },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
