const Attendance = require("../models/attendance");

// ==========================
// Mark Attendance
// ==========================

const markAttendance = async (data, adminId) => {

    const {
        student,
        date,
        status,
        remarks
    } = data;

    // Normalize date (remove time)
    const attendanceDate = new Date(date);
    attendanceDate.setHours(0, 0, 0, 0);

    // Check if attendance already exists
    const existingAttendance = await Attendance.findOne({
        student,
        date: attendanceDate
    });

    if (existingAttendance) {

        existingAttendance.status = status;
        existingAttendance.remarks = remarks || "";
        existingAttendance.markedBy = adminId;

        await existingAttendance.save();

        return {
            success: true,
            message: "Attendance Updated Successfully",
            data: existingAttendance
        };

    }

    // Create New Attendance
    const attendance = await Attendance.create({

        student,

        date: attendanceDate,

        status,

        remarks,

        markedBy: adminId

    });

    return {

        success: true,

        message: "Attendance Marked Successfully",

        data: attendance

    };

};


// ==========================
// Get Student Attendance
// ==========================

const getStudentAttendance = async (studentId) => {

    const records = await Attendance.find({
        student: studentId
    }).sort({ date: -1 });

    const total = records.length;

    const present = records.filter(
        x => x.status === "Present"
    ).length;

    const percentage =
        total === 0
            ? 0
            : Math.round((present / total) * 100);

    return {
        success: true,
        percentage,
        total,
        present,
        records
    };

};
module.exports = {
    markAttendance,
    getStudentAttendance
};