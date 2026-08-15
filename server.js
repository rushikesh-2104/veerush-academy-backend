require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const authRoutes = require("./routes/auth.routes");
const studentRoutes = require("./routes/student.routes");
const userRoutes = require("./routes/user.routes");
const attendanceRoutes = require("./routes/attendance.routes");
const homeworkRoutes = require("./routes/homework.routes");
const feeRoutes = require("./routes/fee.routes");
const classRoutes = require("./routes/class.route");
const weeklyTestRoutes = require("./routes/weeklyTest.routes");
const announcementRoutes = require("./routes/announcement.routes");
const buddyRoutes = require("./routes/buddy.routes");
const app = express();

// Connect Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);


app.use("/api/students", studentRoutes);

// Test Route
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "🚀 Tuition Backend Running Successfully"
    });
});
app.use("/api/homework", homeworkRoutes);
app.use("/api/users", userRoutes);
app.use("/api/attendance", attendanceRoutes);
app.use("/api/fees", feeRoutes);
app.use("/api/classes", classRoutes);
app.use("/api/tests", weeklyTestRoutes);
app.use(
    "/api/announcements",
    announcementRoutes
);
app.use("/api/buddy", buddyRoutes);

// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});