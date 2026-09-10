
const express = require('express');
const cors = require('cors');
require('dotenv').config();
console.log("JWT SECRET:", process.env.JWT_SECRET);
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const packageRoutes = require("./routes/packageRoutes");
const protect = require("./middleware/authMiddleware");

const app = express();


app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/packages", packageRoutes);

app.get("/", (req, res) => {
    res.json({ message: 'SwiftDrop is running!' 

    });
});

app.get("/api/protected", protect, (req, res) =>{
    res.json({
        message: "You accessed a protected route",
        user: req.user,
    });
});


connectDB();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

