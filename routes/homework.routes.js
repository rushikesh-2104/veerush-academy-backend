const express = require("express");
const router = express.Router();

const Homework = require("../models/homework");

// =======================
// Get All Homework
// =======================
router.get("/", async (req, res) => {

    try {

        const homework = await Homework.find()

            .populate("studentId", "fullName standard")

            .lean();

        res.status(200).json(homework);

    }

    catch (err) {

        console.log(err);

        res.status(500).json({

            message: err.message

        });

    }

});

// =======================
// Get Homework By Student
// =======================
router.get("/student/:studentId", async (req, res) => {

    try {

        const homework = await Homework.find({

            studentId: req.params.studentId

        })

        .populate("studentId", "fullName standard")

        .lean();

        res.status(200).json(homework);

    }

    catch (err) {

        console.log(err);

        res.status(500).json({

            message: err.message

        });

    }

});

// =======================
// Create Homework
// =======================
router.post("/", async (req, res) => {

    try {

        const homework = await Homework.create(req.body);

        const populatedHomework = await Homework.findById(homework._id)

            .populate("studentId", "fullName standard")

            .lean();

        res.status(201).json(populatedHomework);

    }

    catch (err) {

        console.log(err);

        res.status(500).json({

            message: err.message

        });

    }

});

// =======================
// Update Homework
// =======================
router.put("/:id", async (req, res) => {

    try {

        const homework = await Homework.findByIdAndUpdate(

            req.params.id,

            req.body,

            {

                new: true,

                runValidators: true

            }

        )

        .populate("studentId", "fullName standard")

        .lean();

        if (!homework) {

            return res.status(404).json({

                message: "Homework Not Found"

            });

        }

        res.status(200).json(homework);

    }

    catch (err) {

        console.log(err);

        res.status(500).json({

            message: err.message

        });

    }

});

// =======================
// Delete Homework
// =======================
router.delete("/:id", async (req, res) => {

    try {

        const homework = await Homework.findByIdAndDelete(

            req.params.id

        );

        if (!homework) {

            return res.status(404).json({

                message: "Homework Not Found"

            });

        }

        res.status(200).json({

            message: "Homework Deleted Successfully"

        });

    }

    catch (err) {

        console.log(err);

        res.status(500).json({

            message: err.message

        });

    }

});

module.exports = router;