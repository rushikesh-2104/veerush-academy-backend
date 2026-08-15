const authService = require("../services/auth.service");

// ========================
// Register
// ========================

const register = async (req, res) => {
    try {

        const result = await authService.register(req.body);

        res.status(201).json(result);

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message,
        });

    }
};

// ========================
// Login
// ========================

const login = async (req, res) => {
    try {

        const result = await authService.login(req.body);

        res.status(200).json(result);

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message,
        });

    }
};

// ========================
// Get Profile
// ========================

const getProfile = async (req, res) => {

    try {

        const result = await authService.getProfile(req.user.id);

        res.status(200).json(result);

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message,
        });

    }

};

module.exports = {
    register,
    login,
    getProfile,
};