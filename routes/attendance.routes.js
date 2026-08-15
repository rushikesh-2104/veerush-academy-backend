const express = require("express");

const router = express.Router();

const attendanceController = require("../controllers/attendance.controller");

const authenticate = require("../middleware/auth.middleware");
const authorize = require("../middleware/role.middleware");

// Mark Attendance
router.post(
    "/",
    authenticate,
    authorize("admin", "teacher"),
    attendanceController.markAttendance
);

// Student Attendance
router.get(
    "/student/:id",
    authenticate,
    attendanceController.getStudentAttendance
);

module.exports = router;