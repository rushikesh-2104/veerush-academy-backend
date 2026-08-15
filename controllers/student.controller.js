const studentService = require("../services/student.service");

const createStudent = async (req, res) => {

    try {

        const result = await studentService.createStudent(req.body);

        res.status(201).json(result);

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message,
        });

    }

};

module.exports = {
    createStudent,
};