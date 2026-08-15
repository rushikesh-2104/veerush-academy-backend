const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// ========================
// Register Service
// ========================

const register = async (userData) => {

    const { email, password } = userData;

    // Check Existing User
    const existingUser = await User.findOne({ email });

    if (existingUser) {
        throw new Error("User already exists");
    }

    // Hash Password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create User
    const user = await User.create({
        ...userData,
        password: hashedPassword
    });

    // Generate JWT
    const token = jwt.sign(
        {
            id: user._id,
            role: user.role
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "7d"
        }
    );

    return {
        success: true,
        message: "Registration Successful",
        token,
        user: {
            _id: user._id,
            fullName: user.fullName,
            email: user.email,
            role: user.role,
            course: user.course,
            batch: user.batch,
            standard: user.standard,
            phone: user.phone,
            parentPhone: user.parentPhone,
            fatherName: user.fatherName,
            motherName: user.motherName,
            gender: user.gender,
            address: user.address,
            school: user.school,
            board: user.board,
            monthlyFees: user.monthlyFees,
            admissionFees: user.admissionFees,
            profileImage: user.profileImage,
            isActive: user.isActive
        }
    };

};

// ========================
// Login Service
// ========================

const login = async (userData) => {

    const { email, password } = userData;

    // Find User
    const user = await User.findOne({ email });

    if (!user) {
        throw new Error("User not found");
    }

    // Check Password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        throw new Error("Invalid Password");
    }

    // Generate JWT
    const token = jwt.sign(
        {
            id: user._id,
            role: user.role
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "7d"
        }
    );

    return {
        success: true,
        message: "Login Successful",
        token,
        user: {
            _id: user._id,
            fullName: user.fullName,
            email: user.email,
            role: user.role,
            course: user.course,
            batch: user.batch,
            standard: user.standard,
            phone: user.phone,
            parentPhone: user.parentPhone,
            fatherName: user.fatherName,
            motherName: user.motherName,
            gender: user.gender,
            address: user.address,
            school: user.school,
            board: user.board,
            monthlyFees: user.monthlyFees,
            admissionFees: user.admissionFees,
            profileImage: user.profileImage,
            isActive: user.isActive
        }
    };

};

// ========================
// Get Profile Service
// ========================

const getProfile = async (userId) => {

    const user = await User.findById(userId).select("-password");

    if (!user) {
        throw new Error("User not found");
    }

    return {
        success: true,
        user
    };

};

// ========================
// Exports
// ========================

module.exports = {
    register,
    login,
    getProfile
};