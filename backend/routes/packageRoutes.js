
const express = require("express");
const {createPackage} = require("../controllers/packageControllers");
const authMiddleware = require("../middleware/authMiddleware");
const {getPackageByTrackingNumber} = require("../controllers/packageControllers");
const {updatePackage} = require("../controllers/packageControllers");
const{deletePackage} = require("../controllers/packageControllers");

const router = express.Router();
router.get("/track/:trackingNumber", authMiddleware,getPackageByTrackingNumber);
router.post("/", authMiddleware, createPackage);
router.put("/:id",authMiddleware, updatePackage);
router.delete("/:id", authMiddleware, deletePackage)



module.exports = router;