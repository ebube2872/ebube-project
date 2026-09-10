
 require ("dotenv").config();
 const jwt = require ("jsonwebtoken");
 
 const protect = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
    

        if (!authHeader || !authHeader.startsWith ("Bearer")) {
            return res.status(401).json({
                message:"Not authorized, no token provided"
            });
        }

        const token = authHeader.split(" ") [1];

           console.log("MIDDLEWARE SECRET:", process.env.JWT_SECRET )
           console.log("TOKEN EXISTS:", !!token);
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;

        next();
         } catch (error) {
            console.log("JWT ERROR:", error.message);
         }
    }
 
    module.exports = protect;
