const express = require("express");

const router = express.Router();

const {

    createFee,
    getFees,
    getFeeByStudent,
    updateFee,
    deleteFee,
    receivePayment,
    getPaymentHistory,
    getInstallments

} = require("../controllers/fee.controller");

// ==========================
// Create Fee
// ==========================

router.post(
    "/",
    createFee
);

// ==========================
// Get All Fees
// ==========================

router.get(
    "/",
    getFees
);

// ==========================
// Get Fee By Student
// ==========================

router.get(
    "/student/:studentId",
    getFeeByStudent
);

// ==========================
// Update Fee
// ==========================

router.put(
    "/:id",
    updateFee
);

// ==========================
// Delete Fee
// ==========================

router.delete(
    "/:id",
    deleteFee
);

// ==========================
// Receive Payment
// ==========================

router.post(
    "/:id/payment",
    receivePayment
);

// ==========================
// Payment History
// ==========================

router.get(
    "/:id/payments",
    getPaymentHistory
);

// ==========================
// Installments
// ==========================

router.get(
    "/:id/installments",
    getInstallments
);

module.exports = router;