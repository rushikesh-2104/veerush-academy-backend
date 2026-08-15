const feeService = require("../services/fee.service");

// ==========================
// Create Fee
// ==========================

const createFee = async (req, res) => {

    try {

        const fee = await feeService.createFee(req.body);

        res.status(201).json({
            success: true,
            data: fee
        });

    }

    catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// ==========================
// Get All Fees
// ==========================

const getFees = async (req, res) => {

    try {

        const fees = await feeService.getFees();

        res.status(200).json({
            success: true,
            data: fees
        });

    }

    catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// ==========================
// Get Fee By Student
// ==========================

const getFeeByStudent = async (req, res) => {

    try {

        const fee = await feeService.getFeeByStudent(
            req.params.studentId
        );

        res.status(200).json({
            success: true,
            data: fee
        });

    }

    catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// ==========================
// Update Fee
// ==========================

const updateFee = async (req, res) => {

    try {

        const fee = await feeService.updateFee(

            req.params.id,

            req.body

        );

        res.status(200).json({
            success: true,
            data: fee
        });

    }

    catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// ==========================
// Delete Fee
// ==========================

const deleteFee = async (req, res) => {

    try {

        await feeService.deleteFee(req.params.id);

        res.status(200).json({

            success: true,

            message: "Fee Deleted Successfully"

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};

// ==========================
// Receive Payment
// ==========================

const receivePayment = async (req, res) => {

    try {

        const fee = await feeService.receivePayment(

            req.params.id,

            req.body

        );

        res.status(200).json({

            success: true,

            data: fee

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};

// ==========================
// Payment History
// ==========================

const getPaymentHistory = async (req, res) => {

    try {

        const payments = await feeService.getPaymentHistory(

            req.params.id

        );

        res.status(200).json({

            success: true,

            data: payments

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};

// ==========================
// Get Installments
// ==========================

const getInstallments = async (req, res) => {

    try {

        const installments = await feeService.getInstallments(

            req.params.id

        );

        res.status(200).json({

            success: true,

            data: installments

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

    createFee,

    getFees,

    getFeeByStudent,

    updateFee,

    deleteFee,

    receivePayment,

    getPaymentHistory,

    getInstallments

};