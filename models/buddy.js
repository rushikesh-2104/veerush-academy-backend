const mongoose = require("mongoose");

const buddySchema = new mongoose.Schema(
  {
    message: {
      type: String,
      required: true,
      trim: true
    },

    type: {
      type: String,
      enum: [
        "General",
        "Homework",
        "Attendance",
        "Fees",
        "Test",
        "Announcement",
        "Motivation"
      ],
      default: "General"
    },

    isActive: {
      type: Boolean,
      default: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Buddy", buddySchema);