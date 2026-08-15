const express = require("express");

const router = express.Router();

const {

    createClass,
    getClasses,
    getTodaysClass,
    updateClass,
    deleteClass

} = require("../controllers/class.controller");

// =====================================
// Create Class
// =====================================

router.post(
    "/",
    createClass
);

// =====================================
// Get All Classes
// =====================================

router.get(
    "/",
    getClasses
);

// =====================================
// Today's Classes
// =====================================

router.get(
    "/today",
    getTodaysClass
);

// =====================================
// Update Class
// =====================================

router.put(
    "/:id",
    updateClass
);

// =====================================
// Delete Class
// =====================================

router.delete(
    "/:id",
    deleteClass
);

module.exports = router;