const attendanceService = require("../services/attendance.service");

// ==============================
// Mark Attendance
// ==============================

const markAttendance = async (req, res) => {

    try {

        const result = await attendanceService.markAttendance(
            req.body,
            req.user.id
        );

        res.status(200).json(result);

    }

    catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};

// ==============================
// Student Attendance
// ==============================

const getStudentAttendance = async (req, res) => {

    try {

        const result = await attendanceService.getStudentAttendance(
            req.params.id
        );

        res.status(200).json(result);

    }

    catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};

module.exports = {

    markAttendance,

    getStudentAttendance

};