const mongoose = require("mongoose");

const packageSchema = new mongoose.Schema(
    {
        senderName: {
            type: String,
            required: true,
            trim: true,
        },

        senderPhone : {
            type: String,
            required: true,
            trim: true,
        },

        pickupAddress: {
            type: String,
            required: true,
            trim:true,
        },

        receiverName: {
            type: String,
            required: true,
            trim:true,
        },

        receiverPhone: {
            type: String,
            required: true,
            trim: true,
        },

        deliveryAddress: {
            type: String,
            required: true,
            trim: true,
        },
        
        packageDescription: {
            type: String,
            required: true,
            trim: true,
        },

        status: {
            type: String,
            enum: ["Pending", "Picked up", "In transit", "Delivered"],
            default: "Pending",
        },

        trackingNumber: {
            type: String,
            required: true,
            unique: true,
        },

    },
    
    {
        timestamps: true,
    }
);

const Package = mongoose.model("Package", packageSchema);

module.exports = Package;