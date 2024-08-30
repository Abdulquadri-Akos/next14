import mongoose from "mongoose";

// MODEL FOR THE DATABASE
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 20,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      max: 50,
    },

    password: {
      type: String,
    },

    img: {
      type: String,
    },

    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const hospitalSchema = new mongoose.Schema(
  {
    hospitalName: {
      type: String,
      required: true,
    },

    address: {
      type: String,
      required: true,
    },

    contact: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Hospital =
  mongoose.models?.Hospital || mongoose.model("Hospital", hospitalSchema);

export const User = mongoose.models?.User || mongoose.model("User", userSchema);
