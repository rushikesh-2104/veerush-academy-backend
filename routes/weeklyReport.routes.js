const express = require("express");

const router = express.Router();

const {
    createWeeklyReport,
    getStudentReports,
    getWeeklyReport,
    updateWeeklyReport,
    deleteWeeklyReport
} = require("../controllers/weeklyReport.controller");


// ==========================================
// Create Weekly Report
// ==========================================

router.post(
    "/",
    createWeeklyReport
);


// ==========================================
// Get All Reports By Student
// ==========================================

router.get(
    "/student/:studentId",
    getStudentReports
);


// ==========================================
// Get Report By Student + Week
// ==========================================

router.get(
    "/student/:studentId/week",
    getWeeklyReport
);


// ==========================================
// Update Weekly Report
// ==========================================

router.put(
    "/:id",
    updateWeeklyReport
);


// ==========================================
// Delete Weekly Report
// ==========================================

router.delete(
    "/:id",
    deleteWeeklyReport
);


module.exports = router;