const express = require("express");

const router = express.Router();

const {

    createTest,
    getTests,
    getStudentTests,
    getUpcomingTestByStudent,
    getLatestResultByStudent,
    getSingleTest,
    updateTest,
    deleteTest

} = require("../controllers/weeklyTest.controller");

// ==========================================
// Create Test
// ==========================================

router.post("/", createTest);

// ==========================================
// Get All Tests
// ==========================================

router.get("/", getTests);

// ==========================================
// Get Tests By Student
// ==========================================

router.get(
    "/student/:studentId",
    getStudentTests
);

// ==========================================
// Get Upcoming Test By Student
// ==========================================

router.get(
    "/student/:studentId/upcoming",
    getUpcomingTestByStudent
);

// ==========================================
// Get Latest Result By Student
// ==========================================

router.get(
    "/student/:studentId/latest",
    getLatestResultByStudent
);

// ==========================================
// Get Single Test
// ==========================================

router.get("/:id", getSingleTest);

// ==========================================
// Update Test
// ==========================================

router.put("/:id", updateTest);

// ==========================================
// Delete Test
// ==========================================

router.delete("/:id", deleteTest);

module.exports = router;