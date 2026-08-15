const Fee = require("../models/Fee");

// ==========================
// Create Fee
// ==========================

const createFee = async (data) => {

    data.paidAmount = data.paidAmount || 0;

    data.remainingAmount =
        data.totalFees - data.paidAmount;

    if (data.remainingAmount <= 0) {

        data.status = "Completed";

    }

    else if (data.paidAmount > 0) {

        data.status = "Partial";

    }

    else {

        data.status = "Pending";

    }

    return await Fee.create(data);

};

// ==========================
// Get All Fees
// ==========================

const getFees = async () => {

    return await Fee.find()
        .populate(
            "student",
            "fullName email phone"
        );

};

// ==========================
// Get Fee By Student
// ==========================

const getFeeByStudent = async (studentId) => {

    return await Fee.findOne({

        student: studentId

    }).populate(

        "student",
        "fullName email phone"

    );

};

// ==========================
// Update Fee
// ==========================

const updateFee = async (id, data) => {

    if (
        data.totalFees !== undefined &&
        data.paidAmount !== undefined
    ) {

        data.remainingAmount =
            data.totalFees -
            data.paidAmount;

        if (data.remainingAmount <= 0) {

            data.status = "Completed";

        }

        else if (data.paidAmount > 0) {

            data.status = "Partial";

        }

        else {

            data.status = "Pending";

        }

    }

    return await Fee.findByIdAndUpdate(

        id,

        data,

        {
            new: true
        }

    ).populate(

        "student",
        "fullName email phone"

    );

};

// ==========================
// Delete Fee
// ==========================

const deleteFee = async (id) => {

    return await Fee.findByIdAndDelete(id);

};

// ==========================
// Receive Payment
// ==========================

const receivePayment = async (

    feeId,

    payment

) => {

    const fee = await Fee.findById(feeId);

    if (!fee) {

        throw new Error("Fee Record Not Found");

    }

    let amount = Number(payment.amount);

    if (amount <= 0) {

        throw new Error("Invalid Amount");

    }

    if (amount > fee.remainingAmount) {

        throw new Error("Amount exceeds remaining fees");

    }

    fee.paidAmount += amount;

    fee.remainingAmount -= amount;

    if (fee.remainingAmount === 0) {

        fee.status = "Completed";

    }

    else {

        fee.status = "Partial";

    }

    fee.installments.push({

        installmentNo:
            fee.installments.length + 1,

        dueDate: new Date(),

        amount: amount,

        paidAmount: amount,

        remainingAmount: 0,

        status: "Paid",

        paymentMethod:
            payment.method || "Cash",

        transactionId:
            payment.transactionId || "",

        paidOn: new Date(),

        remarks:
            payment.remarks || ""

    });

    await fee.save();

    return fee.populate(

        "student",

        "fullName email phone"

    );

};

// ==========================
// Payment History
// ==========================

const getPaymentHistory = async (

    feeId

) => {

    const fee = await Fee.findById(feeId);

    if (!fee) {

        throw new Error("Fee Record Not Found");

    }

    return fee.installments;

};

// ==========================
// Installments
// ==========================

const getInstallments = async (

    feeId

) => {

    const fee = await Fee.findById(feeId);

    if (!fee) {

        throw new Error("Fee Record Not Found");

    }

    return fee.installments;

};

module.exports = {

    createFee,

    getFees,

    getFeeByStudent,

    updateFee,

    deleteFee,

    receivePayment,

    getPaymentHistory,

    getInstallments

};