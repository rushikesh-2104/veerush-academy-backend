const express = require("express");

const router = express.Router();

const authenticate = require("../middleware/auth.middleware");
const authorize = require("../middleware/role.middleware");

const studentController = require("../controllers/student.controller");

// Create Student

router.post(
    "/",
    authenticate,
    authorize("admin"),
    studentController.createStudent
);

module.exports = router;