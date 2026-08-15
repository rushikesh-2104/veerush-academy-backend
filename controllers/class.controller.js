const ClassSchedule = require("../models/classSchedule");

// ==============================
// Create Class
// ==============================

exports.createClass = async (req, res) => {

    try {

        const newClass = await ClassSchedule.create(req.body);

        res.status(201).json({
            success: true,
            data: newClass
        });

    }

    catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

};


// ==============================
// Get All Classes
// ==============================

exports.getClasses = async (req, res) => {

    try {

        const classes = await ClassSchedule
            .find()
            .sort({ date: 1 });

        res.status(200).json({
            success: true,
            data: classes
        });

    }

    catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

};


// ==============================
// Today's Classes
// ==============================

exports.getTodaysClass = async (req, res) => {

    try {

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const tomorrow = new Date(today);
        tomorrow.setDate(today.getDate() + 1);

        const todaysClasses = await ClassSchedule.find({

            date: {
                $gte: today,
                $lt: tomorrow
            }

        }).sort({ startTime: 1 });

        res.status(200).json({

            success: true,
            data: todaysClasses

        });

    }

    catch (err) {

        res.status(500).json({

            success: false,
            message: err.message

        });

    }

};


// ==============================
// Update Class
// ==============================

exports.updateClass = async (req, res) => {

    try {

        const updatedClass = await ClassSchedule.findByIdAndUpdate(

            req.params.id,
            req.body,
            { new: true }

        );

        if (!updatedClass) {

            return res.status(404).json({

                success: false,
                message: "Class not found"

            });

        }

        res.status(200).json({

            success: true,
            data: updatedClass

        });

    }

    catch (err) {

        res.status(500).json({

            success: false,
            message: err.message

        });

    }

};


// ==============================
// Delete Class
// ==============================

exports.deleteClass = async (req, res) => {

    try {

        const deletedClass = await ClassSchedule.findByIdAndDelete(

            req.params.id

        );

        if (!deletedClass) {

            return res.status(404).json({

                success: false,
                message: "Class not found"

            });

        }

        res.status(200).json({

            success: true,
            message: "Class deleted successfully"

        });

    }

    catch (err) {

        res.status(500).json({

            success: false,
            message: err.message

        });

    }

};