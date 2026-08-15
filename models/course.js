const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema(
  {
    courseName: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      default: "",
    },

    standard: {
      type: Number,
      required: true,
    },

    board: {
      type: String,
      enum: ["SSC", "CBSE", "ICSE", "State", "Other"],
      default: "Other",
    },

    duration: {
      type: Number, // in months
      default: 3,
    },

    fees: {
      type: Number,
      required: true,
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Course", CourseSchema);