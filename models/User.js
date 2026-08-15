const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
{
  // ==========================
  // Basic Details
  // ==========================

  fullName: {
    type: String,
    required: true,
    trim: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },

  password: {
    type: String,
    required: true,
  },

  role: {
    type: String,
    enum: ["admin", "teacher", "student", "parent"],
    default: "student",
  },

  // ==========================
  // Contact Details
  // ==========================

  phone: {
    type: String,
    trim: true,
    default: "",
  },

  parentPhone: {
    type: String,
    trim: true,
    default: "",
  },

  address: {
    type: String,
    default: "",
  },

  // ==========================
  // Personal Details
  // ==========================

  gender: {
    type: String,
    enum: ["Male", "Female", "Other"],
    default: "Other",
  },

  fatherName: {
    type: String,
    default: "",
  },

  motherName: {
    type: String,
    default: "",
  },

  dob: {
    type: Date,
  },

  // ==========================
  // Academic Details
  // ==========================

  school: {
    type: String,
    default: "",
  },

  standard: {
    type: String,
    required: true,
  },

  board: {
    type: String,
    enum: ["SSC", "CBSE", "ICSE", "State", "Other"],
    default: "Other",
  },

  course: {
    type: String,
    default: "",
  },

  batch: {
    type: String,
    default: "",
  },

  joiningDate: {
    type: Date,
    default: Date.now,
  },

  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
    default: null
},

teacherId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Teacher",
    default: null
},

  // ==========================
  // Fees
  // ==========================

  monthlyFees: {
    type: Number,
    default: 0,
  },

  admissionFees: {
    type: Number,
    default: 0,
  },

  // ==========================
  // Profile
  // ==========================

  profileImage: {
    type: String,
    default: "",
  },

  theme: {
    type: String,
    default: "midnight",
  },

  avatar: {
    type: String,
    default: "default",
  },

  // ==========================
  // Gamification
  // ==========================

  coins: {
    type: Number,
    default: 0,
  },

  xp: {
    type: Number,
    default: 0,
  },

  level: {
    type: Number,
    default: 1,
  },

  badges: [
    {
      type: String,
    },
  ],

  // ==========================
  // Authentication
  // ==========================

  refreshToken: {
    type: String,
    default: "",
  },

  lastLogin: {
    type: Date,
  },

  // ==========================
  // Account Status
  // ==========================

  isActive: {
    type: Boolean,
    default: true,
  },
},
{
  timestamps: true,
}
);


module.exports = mongoose.model("User", UserSchema);