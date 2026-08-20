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
const weeklyReportRoutes = require("./routes/weeklyReport.routes");

const app = express();


// ==============================
// Connect Database
// ==============================

connectDB();


// ==============================
// CORS
// ==============================

const allowedOrigins = [
    "http://localhost:4200",
    "https://veerush-academy.vercel.app"
];

app.use(
    cors({
        origin: function (origin, callback) {

            // Allow Postman / server-to-server requests
            if (!origin) {
                return callback(null, true);
            }

            if (allowedOrigins.includes(origin)) {
                return callback(null, true);
            }

            return callback(
                new Error("Not allowed by CORS")
            );

        },

        methods: [
            "GET",
            "POST",
            "PUT",
            "DELETE",
            "PATCH",
            "OPTIONS"
        ],

        allowedHeaders: [
            "Content-Type",
            "Authorization"
        ],

        credentials: true
    })
);


// ==============================
// Body Parser
// ==============================

app.use(express.json());


// ==============================
// AUTH
// ==============================

app.use(
    "/api/auth",
    authRoutes
);


// ==============================
// STUDENTS
// ==============================

app.use(
    "/api/students",
    studentRoutes
);


// ==============================
// HOME
// ==============================

app.get("/", (req, res) => {

    res.status(200).json({

        success: true,

        message:
            "🚀 Tuition Backend Running Successfully"

    });

});


// ==============================
// HOMEWORK
// ==============================

app.use(
    "/api/homework",
    homeworkRoutes
);


// ==============================
// USERS
// ==============================

app.use(
    "/api/users",
    userRoutes
);


// ==============================
// ATTENDANCE
// ==============================

app.use(
    "/api/attendance",
    attendanceRoutes
);


// ==============================
// FEES
// ==============================

app.use(
    "/api/fees",
    feeRoutes
);


// ==============================
// CLASSES
// ==============================

app.use(
    "/api/classes",
    classRoutes
);


// ==============================
// WEEKLY TESTS
// ==============================

app.use(
    "/api/tests",
    weeklyTestRoutes
);


// ==============================
// ANNOUNCEMENTS
// ==============================

app.use(
    "/api/announcements",
    announcementRoutes
);


// ==============================
// BUDDY
// ==============================

app.use(
    "/api/buddy",
    buddyRoutes
);


// ==============================
// WEEKLY REPORTS
// ==============================

app.use(
    "/api/reports",
    weeklyReportRoutes
);


// ==============================
// EXPORT
// ==============================

module.exports = app;