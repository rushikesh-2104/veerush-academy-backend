const mongoose = require("mongoose");

const PaymentSchema = new mongoose.Schema(
{
    amount: {
        type: Number,
        required: true
    },

    method: {
        type: String,
        enum: ["Cash", "UPI", "Card", "Bank"],
        default: "Cash"
    },

    remarks: {
        type: String,
        default: ""
    },

    paidOn: {
        type: Date,
        default: Date.now
    }
},
{
    _id: false
}
);

const InstallmentSchema = new mongoose.Schema(
{
    installmentNo: {
        type: Number,
        required: true
    },

    dueDate: {
        type: Date,
        required: true
    },

    amount: {
        type: Number,
        required: true
    },

    paidAmount: {
        type: Number,
        default: 0
    },

    remainingAmount: {
        type: Number,
        default: function () {
            return this.amount;
        }
    },

    status: {
        type: String,
        enum: [
            "Pending",
            "Partial",
            "Paid",
            "Overdue"
        ],
        default: "Pending"
    },

    payments: [PaymentSchema]
},
{
    _id: false
}
);

const FeeSchema = new mongoose.Schema(
{
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    course: {
        type: String,
        required: true
    },

    totalFees: {
        type: Number,
        required: true
    },

    paidAmount: {
        type: Number,
        default: 0
    },

    remainingAmount: {
        type: Number,
        default: 0
    },

    totalInstallments: {
        type: Number,
        default: 1
    },

    dueDay: {
        type: Number,
        default: 15
    },

    status: {
        type: String,
        enum: [
            "Pending",
            "Partial",
            "Completed",
            "Overdue"
        ],
        default: "Pending"
    },

    installments: [InstallmentSchema]
},
{
    timestamps: true
});

module.exports = mongoose.model("Fee", FeeSchema);