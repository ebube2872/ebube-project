
const  User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {
    try {
        const { name, email, password, phone } = req.body;
        
        if(!name || !email || !password || !phone) {
            return res.status(400).json({ message: "Please provide all required fields" });
         }

         const existingUser = await User.findOne({ email });
         if(existingUser) {
            return res.status(400).json({ message: "User already exists" });
         }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            phone,
        });

        res.status(201).json({ message: "Account created successfully", 
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                phone: user.phone,
            },  
        });

    } catch (error) {
        res.status(500).json({ 
            message: "Server error",
             error: error.message
             });

    }
};

module.exports = { 
    signup, 
};

const login = async (req, res) => {

  try{
    const {email,password} =req.body;

    if (!email || !password ) {
        return res.status(400).json({
            message: "Please provide email and password"
        })
    }

const user = await User.findOne({email});
    if (!user) {
        return res.status(401).json({
            message: "Invalid email or password"
        });
    }

    const passwordMatch = await bcrypt.compare(password,user.password)
    if (!passwordMatch) {
        return res.status(401).json({
            message:"Invalid email or password"
        })
    }



     const token = jwt.sign(
        {userId: user._id},
        process.env.JWT_SECRET,
     );
    res.status(200).json({
         message:"Login Successful",
         token,
         user: {
            id: user._id,
            name: user.name,
            email: user.email,
            phone: user.phone
         },
    });

    
    } catch (error) {
        res.status (500).json({
            message: "Server Error",
            error: error.message,
        });
    }

    }

    


module.exports = {
    signup,
    login,
};








