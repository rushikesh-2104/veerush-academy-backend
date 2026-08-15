const Announcement = require("../models/announcement");

// ==========================================
// Create Announcement
// ==========================================

exports.createAnnouncement = async (req, res) => {

    try {

        const announcement = await Announcement.create(req.body);

        res.status(201).json({

            success: true,
            message: "Announcement Created Successfully",
            data: announcement

        });

    }

    catch (err) {

        res.status(500).json({

            success: false,
            message: err.message

        });

    }

};

// ==========================================
// Get All Announcements
// ==========================================

exports.getAnnouncements = async (req, res) => {

    try {

        const announcements = await Announcement
            .find()
            .sort({ date: -1 });

        res.json({

            success: true,
            data: announcements

        });

    }

    catch (err) {

        res.status(500).json({

            success: false,
            message: err.message

        });

    }

};

// ==========================================
// Get Latest Active Announcements
// ==========================================

exports.getLatestAnnouncements = async (req, res) => {

    try {

        const announcements = await Announcement
            .find({
                isActive: true
            })
            .sort({ date: -1 })
            .limit(3);

        res.json({

            success: true,
            data: announcements

        });

    }

    catch (err) {

        res.status(500).json({

            success: false,
            message: err.message

        });

    }

};

// ==========================================
// Get Single Announcement
// ==========================================

exports.getSingleAnnouncement = async (req, res) => {

    try {

        const announcement = await Announcement.findById(req.params.id);

        if (!announcement) {

            return res.status(404).json({

                success: false,
                message: "Announcement not found"

            });

        }

        res.json({

            success: true,
            data: announcement

        });

    }

    catch (err) {

        res.status(500).json({

            success: false,
            message: err.message

        });

    }

};

// ==========================================
// Update Announcement
// ==========================================

exports.updateAnnouncement = async (req, res) => {

    try {

        const announcement = await Announcement.findByIdAndUpdate(

            req.params.id,
            req.body,

            {
                new: true,
                runValidators: true
            }

        );

        if (!announcement) {

            return res.status(404).json({

                success: false,
                message: "Announcement not found"

            });

        }

        res.json({

            success: true,
            message: "Announcement Updated Successfully",
            data: announcement

        });

    }

    catch (err) {

        res.status(500).json({

            success: false,
            message: err.message

        });

    }

};

// ==========================================
// Delete Announcement
// ==========================================

exports.deleteAnnouncement = async (req, res) => {

    try {

        const announcement = await Announcement.findByIdAndDelete(req.params.id);

        if (!announcement) {

            return res.status(404).json({

                success: false,
                message: "Announcement not found"

            });

        }

        res.json({

            success: true,
            message: "Announcement Deleted Successfully"

        });

    }

    catch (err) {

        res.status(500).json({

            success: false,
            message: err.message

        });

    }

};