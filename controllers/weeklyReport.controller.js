const weeklyReportService = require("../services/weeklyReport.service");

// ==========================================
// Create Weekly Report
// ==========================================

const createWeeklyReport = async (req, res) => {

    try {

        const report =
            await weeklyReportService.createWeeklyReport(
                req.body
            );

        res.status(201).json({

            success: true,

            message: "Weekly Report Created Successfully",

            data: report

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};


// ==========================================
// Get All Reports By Student
// ==========================================

const getStudentReports = async (req, res) => {

    try {

        const reports =
            await weeklyReportService.getStudentReports(
                req.params.studentId
            );

        res.status(200).json({

            success: true,

            data: reports

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};


// ==========================================
// Get Report By Student + Week
// ==========================================

const getWeeklyReport = async (req, res) => {

    try {

        const report =
            await weeklyReportService.getWeeklyReport(

                req.params.studentId,

                req.query.weekStart,

                req.query.weekEnd

            );

        res.status(200).json({

            success: true,

            data: report

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};


// ==========================================
// Update Weekly Report
// ==========================================

const updateWeeklyReport = async (req, res) => {

    try {

        const report =
            await weeklyReportService.updateWeeklyReport(

                req.params.id,

                req.body

            );

        res.status(200).json({

            success: true,

            message: "Weekly Report Updated Successfully",

            data: report

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};


// ==========================================
// Delete Weekly Report
// ==========================================

const deleteWeeklyReport = async (req, res) => {

    try {

        await weeklyReportService.deleteWeeklyReport(
            req.params.id
        );

        res.status(200).json({

            success: true,

            message: "Weekly Report Deleted Successfully"

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};


module.exports = {

    createWeeklyReport,

    getStudentReports,

    getWeeklyReport,

    updateWeeklyReport,

    deleteWeeklyReport

};