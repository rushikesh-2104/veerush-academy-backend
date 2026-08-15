const express = require("express");

const router = express.Router();

const {

    createAnnouncement,
    getAnnouncements,
    getLatestAnnouncements,
    getSingleAnnouncement,
    updateAnnouncement,
    deleteAnnouncement

} = require("../controllers/announcement.controller");

// ==========================================
// Create Announcement
// ==========================================

router.post(
    "/",
    createAnnouncement
);

// ==========================================
// Get All Announcements
// ==========================================

router.get(
    "/",
    getAnnouncements
);

// ==========================================
// Get Latest Announcements
// ==========================================

router.get(
    "/latest",
    getLatestAnnouncements
);

// ==========================================
// Get Single Announcement
// ==========================================

router.get(
    "/:id",
    getSingleAnnouncement
);

// ==========================================
// Update Announcement
// ==========================================

router.put(
    "/:id",
    updateAnnouncement
);

// ==========================================
// Delete Announcement
// ==========================================

router.delete(
    "/:id",
    deleteAnnouncement
);

module.exports = router;