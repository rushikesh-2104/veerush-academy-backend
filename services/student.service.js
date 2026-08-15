const User = require("../models/User");
const bcrypt = require("bcrypt");

const createStudent = async (studentData) => {

    const {
        fullName,
        email,
        password,
        phone,
        parentPhone,
        school,
        board,
        course,
    } = studentData;

    // Check Existing User

    const existingUser = await User.findOne({ email });

    if (existingUser) {
        throw new Error("Email already exists");
    }

    // Hash Password

    const hashedPassword = await bcrypt.hash(password, 10);

    // Create Student

    const student = await User.create({
        fullName,
        email,
        password: hashedPassword,
        role: "student",
        phone,
        parentPhone,
        school,
        board,
        course,
    });

    return {
        success: true,
        message: "Student Created Successfully",
        student,
    };
};

module.exports = {
    createStudent,
};