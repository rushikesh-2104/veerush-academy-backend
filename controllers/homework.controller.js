const Homework = require("../models/homework");

// Get All Homework
exports.getHomework = async (req, res) => {

  try {

    const homework = await Homework.find();

    res.status(200).json(homework);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};

// Create Homework
exports.createHomework = async (req, res) => {

  try {

    const homework = new Homework(req.body);

    await homework.save();

    res.status(201).json(homework);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};

// Update Homework
exports.updateHomework = async (req, res) => {

  try {

    const homework = await Homework.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json(homework);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};

// Delete Homework
exports.deleteHomework = async (req, res) => {

  try {

    await Homework.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Homework Deleted Successfully"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};