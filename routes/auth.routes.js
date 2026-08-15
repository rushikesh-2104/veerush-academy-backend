const express = require("express");

const router = express.Router();

const authController = require("../controllers/auth.controller");

const authenticate = require("../middleware/auth.middleware");
const authorize = require("../middleware/role.middleware");

router.post("/register", authController.register);

router.post("/login", authController.login);

router.get(
    "/profile",
    authenticate,
    authController.getProfile
);

router.get(
    "/admin",
    authenticate,
    authorize("admin"),
    (req, res) => {

        res.json({
            success: true,
            message: "Welcome Admin"
        });

    }
);

router.get(
    "/student",
    authenticate,
    authorize("student"),
    (req, res) => {

        res.json({
            success: true,
            message: "Welcome Student"
        });

    }
);

module.exports = router;