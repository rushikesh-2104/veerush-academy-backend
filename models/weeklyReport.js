const mongoose = require("mongoose");

const WeeklyReportSchema = new mongoose.Schema(
    {
        student: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        weekStart: {
            type: Date,
            required: true
        },

        weekEnd: {
            type: Date,
            required: true
        },

        teacherNotes: {
            type: String,
            default: ""
        },

        overallProgress: {
            type: String,
            enum: [
                "Excellent",
                "Good",
                "Needs Improvement"
            ],
            default: "Good"
        }
    },
    {
        timestamps: true
    }
);

WeeklyReportSchema.index(
    {
        student: 1,
        weekStart: 1,
        weekEnd: 1
    },
    {
        unique: true
    }
);

module.exports = mongoose.model(
    "WeeklyReport",
    WeeklyReportSchema
);