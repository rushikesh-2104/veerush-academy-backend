const WeeklyTest = require("../models/weeklyTest");

// ==========================================
// Create Weekly Test
// ==========================================

exports.createTest = async (req, res) => {

    try {

        const test = await WeeklyTest.create(req.body);

        res.status(201).json({

            success: true,
            message: "Weekly Test Created Successfully",
            data: test

        });

    }

    catch (err) {

        res.status(500).json({

            success: false,
            message: err.message

        });

    }

};

// ==========================================
// Get All Weekly Tests
// ==========================================

exports.getTests = async (req, res) => {

    try {

        const tests = await WeeklyTest
            .find()
            .populate("student", "fullName")
            .populate("course", "courseName")
            .sort({ testDate: -1 });

        res.json({

            success: true,
            data: tests

        });

    }

    catch (err) {

        res.status(500).json({

            success: false,
            message: err.message

        });

    }

};

// ==========================================
// Get Tests By Student
// ==========================================

exports.getStudentTests = async (req, res) => {

    try {

        const tests = await WeeklyTest
            .find({
                student: req.params.studentId
            })
            .populate("course", "courseName")
            .sort({ testDate: -1 });

        res.json({

            success: true,
            data: tests

        });

    }

    catch (err) {

        res.status(500).json({

            success: false,
            message: err.message

        });

    }

};

// ==========================================
// Get Upcoming Test By Student
// ==========================================

exports.getUpcomingTestByStudent = async (req, res) => {

    try {

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const test = await WeeklyTest
            .findOne({

                student: req.params.studentId,

                testDate: {
                    $gte: today
                }

            })
            .populate("course", "courseName")
            .sort({ testDate: 1 });

        res.json({

            success: true,
            data: test

        });

    }

    catch (err) {

        res.status(500).json({

            success: false,
            message: err.message

        });

    }

};

// ==========================================
// Get Latest Result By Student
// ==========================================

exports.getLatestResultByStudent = async (req, res) => {

    try {

        const today = new Date();

        const test = await WeeklyTest
            .findOne({

                student: req.params.studentId,

                testDate: {
                    $lt: today
                }

            })
            .populate("course", "courseName")
            .sort({ testDate: -1 });

        res.json({

            success: true,
            data: test

        });

    }

    catch (err) {

        res.status(500).json({

            success: false,
            message: err.message

        });

    }

};

// ==========================================
// Get Single Test
// ==========================================

exports.getSingleTest = async (req, res) => {

    try {

        const test = await WeeklyTest
            .findById(req.params.id)
            .populate("student", "fullName")
            .populate("course", "courseName");

        if (!test) {

            return res.status(404).json({

                success: false,
                message: "Test not found"

            });

        }

        res.json({

            success: true,
            data: test

        });

    }

    catch (err) {

        res.status(500).json({

            success: false,
            message: err.message

        });

    }

};

// ==========================================
// Update Test
// ==========================================

exports.updateTest = async (req, res) => {

    try {

        const test = await WeeklyTest.findByIdAndUpdate(

            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }

        );

        if (!test) {

            return res.status(404).json({

                success: false,
                message: "Test not found"

            });

        }

        res.json({

            success: true,
            message: "Test Updated Successfully",
            data: test

        });

    }

    catch (err) {

        res.status(500).json({

            success: false,
            message: err.message

        });

    }

};

// ==========================================
// Delete Test
// ==========================================

exports.deleteTest = async (req, res) => {

    try {

        const test = await WeeklyTest.findByIdAndDelete(req.params.id);

        if (!test) {

            return res.status(404).json({

                success: false,
                message: "Test not found"

            });

        }

        res.json({

            success: true,
            message: "Test Deleted Successfully"

        });

    }

    catch (err) {

        res.status(500).json({

            success: false,
            message: err.message

        });

    }

};