const mongoose = require("mongoose");

const HomeworkSchema = new mongoose.Schema(
{
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    subject: {
        type: String,
        required: true
    },

    title: {
        type: String,
        required: true,
        trim: true
    },

    description: {
        type: String,
        default: ""
    },

    dueDate: {
        type: Date,
        required: true
    },

    status: {
        type: String,
        enum: ["Pending", "Completed", "Late"],
        default: "Pending"
    },

    submittedAt: {
        type: Date
    },

    remarks: {
        type: String,
        default: ""
    }

},
{
    timestamps: true
}
);

module.exports = mongoose.model("Homework", HomeworkSchema);