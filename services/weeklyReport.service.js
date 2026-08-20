const WeeklyReport = require("../models/weeklyReport");

// ==========================================
// Create Weekly Report
// ==========================================

const createWeeklyReport = async (data) => {

    const {
        student,
        weekStart,
        weekEnd,
        teacherNotes,
        overallProgress
    } = data;

    // Check if report already exists
    const existingReport = await WeeklyReport.findOne({
        student,
        weekStart,
        weekEnd
    });

    if (existingReport) {

        throw new Error(
            "Weekly report already exists for this student and week"
        );

    }

    const report = await WeeklyReport.create({

        student,

        weekStart,

        weekEnd,

        teacherNotes:
            teacherNotes || "",

        overallProgress:
            overallProgress || "Good"

    });

    return await report.populate(
        "student",
        "fullName email phone"
    );

};


// ==========================================
// Get Reports By Student
// ==========================================

const getStudentReports = async (studentId) => {

    return await WeeklyReport.find({

        student: studentId

    })
    .populate(
        "student",
        "fullName email phone"
    )
    .sort({
        weekStart: -1
    });

};


// ==========================================
// Get Report By Student + Week
// ==========================================

const getWeeklyReport = async (
    studentId,
    weekStart,
    weekEnd
) => {

    return await WeeklyReport.findOne({

        student: studentId,

        weekStart: new Date(weekStart),

        weekEnd: new Date(weekEnd)

    }).populate(
        "student",
        "fullName email phone"
    );

};


// ==========================================
// Update Weekly Report
// ==========================================

const updateWeeklyReport = async (
    reportId,
    data
) => {

    const report =
        await WeeklyReport.findByIdAndUpdate(

            reportId,

            {
                teacherNotes:
                    data.teacherNotes,

                overallProgress:
                    data.overallProgress
            },

            {
                new: true,
                runValidators: true
            }

        ).populate(
            "student",
            "fullName email phone"
        );

    if (!report) {

        throw new Error(
            "Weekly report not found"
        );

    }

    return report;

};


// ==========================================
// Delete Weekly Report
// ==========================================

const deleteWeeklyReport = async (
    reportId
) => {

    const report =
        await WeeklyReport.findByIdAndDelete(
            reportId
        );

    if (!report) {

        throw new Error(
            "Weekly report not found"
        );

    }

    return report;

};


module.exports = {

    createWeeklyReport,

    getStudentReports,

    getWeeklyReport,

    updateWeeklyReport,

    deleteWeeklyReport

};