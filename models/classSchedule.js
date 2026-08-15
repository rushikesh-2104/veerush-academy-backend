const mongoose = require("mongoose");

const classScheduleSchema = new mongoose.Schema(

    {

        // ==========================
        // Course
        // ==========================

        course: {
            type: String,
            required: true
        },

        standard: {
            type: String,
            required: true
        },

        subject: {
            type: String,
            required: true
        },

        topic: {
            type: String,
            required: true
        },

        teacher: {
            type: String,
            required: true
        },

        // ==========================
        // Date & Time
        // ==========================

        date: {
            type: Date,
            required: true
        },

        startTime: {
            type: String,
            required: true
        },

        endTime: {
            type: String,
            required: true
        },

        duration: {
            type: Number,
            default: 60
        },

        // ==========================
        // Meeting
        // ==========================

        meetLink: {
            type: String,
            default: ""
        },

        meetingId: {
            type: String,
            default: ""
        },

        meetingPassword: {
            type: String,
            default: ""
        },

        // ==========================
        // Status
        // ==========================

        status: {
            type: String,
            enum: [
                "Scheduled",
                "Live",
                "Completed",
                "Cancelled"
            ],
            default: "Scheduled"
        },

        // ==========================
        // Extra
        // ==========================

        description: {
            type: String,
            default: ""
        },

        recordingLink: {
            type: String,
            default: ""
        }

    },

    {
        timestamps: true
    }

);

module.exports = mongoose.model(
    "ClassSchedule",
    classScheduleSchema
);