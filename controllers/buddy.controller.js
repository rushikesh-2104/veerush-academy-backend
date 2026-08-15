const Buddy = require("../models/buddy");

// =====================================
// Create Buddy Message
// =====================================

exports.createBuddy = async (req, res) => {

    try {

        const buddy = await Buddy.create(req.body);

        res.status(201).json({

            success: true,
            data: buddy

        });

    }

    catch(err){

        res.status(500).json({

            success:false,
            message:err.message

        });

    }

};

// =====================================
// Get All Buddy Messages
// =====================================

exports.getBuddyMessages = async(req,res)=>{

    try{

        const messages = await Buddy
        .find({isActive:true})
        .sort({createdAt:-1});

        res.json({

            success:true,
            data:messages

        });

    }

    catch(err){

        res.status(500).json({

            success:false,
            message:err.message

        });

    }

};

// =====================================
// Update Buddy
// =====================================

exports.updateBuddy = async(req,res)=>{

    try{

        const buddy = await Buddy.findByIdAndUpdate(

            req.params.id,

            req.body,

            {

                new:true,
                runValidators:true

            }

        );

        res.json({

            success:true,
            data:buddy

        });

    }

    catch(err){

        res.status(500).json({

            success:false,
            message:err.message

        });

    }

};

// =====================================
// Delete Buddy
// =====================================

exports.deleteBuddy = async(req,res)=>{

    try{

        await Buddy.findByIdAndDelete(req.params.id);

        res.json({

            success:true,
            message:"Buddy Deleted"

        });

    }

    catch(err){

        res.status(500).json({

            success:false,
            message:err.message

        });

    }

};