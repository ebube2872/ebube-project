
const Package = require("../models/package");

const createPackage = async ( req, res) => {
    try {
        console.log("PACKAGE BODY:", req.body);
        const {
            senderName,
            senderPhone,
            pickupAddress,
            receiverName,
            receiverPhone,
            deliveryAddress,
            packageDescription,
        } = req.body;

        if (
            !senderName ||
            !senderPhone ||
            !pickupAddress ||
            !receiverName ||
            !receiverPhone ||
            !deliveryAddress ||
            !packageDescription
        ) {
            return res.status(400).json({
                message:"Please provide all package details"
            });
        }
         
        const trackingNumber =
        "SD" + Date.now().toString().slice(-8);

        const newPackage = await Package.create({
            senderName,
            senderPhone,
            pickupAddress,
            receiverName,
            receiverPhone,
            deliveryAddress,
            packageDescription,
            trackingNumber,
        });

        res.status(201).json({
            message: "Pacakge created successfully",
            package: newPackage,
        });

         } catch (error) {
            res.status(500).json({
                message: "Server Error",
                error: error.message,
            });
         }
 
    };

    const getPackageByTrackingNumber = async (req, res) => {
        try{
            const {trackingNumber} = req.params;

            const packageData = await Package.findOne({trackingNumber: trackingNumber});

            if(!packageData) {
                return res.status(404).json({
                    message:"Package not found",
                });
            }

            res.status(200).json(packageData);
            

            }catch (error) {
                res.status(500).json({
                    message: "Server Error",
                    error: error.message,
                });
            }
        }

        const updatePackage = async (req, res) => {
            try{
                const {id} = req.params;

                const updatedPackage = await Package.findByIdAndUpdate(
                    id,
                    req.body,
                    {new: true, runValidators: true}
                );

                if (!updatedPackage) {
                    return res.status(404).json({
                        message:"Package not found"
                    });
                }

                res.status(200).json({
                    message: "Package updated successfully",
                    package: updatedPackage
                });
            }catch (error) {
                res.status(500).json({
                    message: "Server Error",
                    error: error.message
                });
            }
        };


        const deletePackage = async (req, res) => {
            try {
                const deletedPackage = await Package.findByIdAndDelete(req.params.id);
               
                if (!deletedPackage) {
                    return res.status(404).json({
                        message: "Package not found",
                    });
                }

                res.status(200).json({
                    message: "Package deleted successfully",
                });
            } catch (error) {
               return res.status(500).json({
                    message: error.message
                })
            }
        }
    

     
    module.exports = {
        createPackage,
        getPackageByTrackingNumber,
        updatePackage,
        deletePackage
    };



