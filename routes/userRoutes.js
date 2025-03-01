const express = require("express");
const router = express.Router();
const User = require("../models/user");
const WellnessGoals = require("../models/wellnessGoalsProgress");
const PreventiveCare = require("../models/preventiveCareReminder");
const HealthTips = require("../models/healthtips");
const bcrypt = require("bcryptjs");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

router.use(express.json());
router.use(cookieParser())

async function generateHashPassword(password){
    const hash = bcrypt.hash(password, 10);
    return hash;
}

async function generateToken(options){
     const token = await jwt.sign(options, process.env.SECRET_KEY, {expiresIn:'1h'});
     return token;
}

async function verifyToken(req){
    return await jwt.verify(req.cookies.authorization, process.env.SECRET_KEY);
}

router.get('/', (req, res, next) => {
    res.send("req created");
})

router.post('/register', async (req, res, next) => {
    try{
        const hashPassword = await generateHashPassword(req.body.password);
        const user = new User({
            ...req.body,
            password:hashPassword
        });
        await user.save();
        res.status(201).json({message: "User created", status:201});
    } catch(err){
        res.status(err.status || 500).send(err);
    }
})

router.post("/login", async (req, res, next)=>{
    try {
        console.log(req.body);
        const user = await User.find({ email: req.body.email });
        console.log(user);
        if (!user) {
            console.log("User not found");
            return res.status(400).json({ error: "Invalid credentials" });
        }
    
        // Compare password
        const isMatch = await bcrypt.compare(req.body.password, user[0].password);
        if (!isMatch) {
            console.log("Password does not match");
            return res.status(400).json({ error: "Invalid credentials" });
        }
    
        console.log("User authenticated successfully");
        const accessToken = await generateToken({
            firstName: user[0].firstName,
            lastName: user[0].lastName,
            email: user[0].email
        });
        res.cookie("authorization", accessToken);
        
        res.status(200).json({
            message: "Login successful"        });
    
    } catch (err) {
        console.error("Error:", err);
        res.status(500).json({ error: "Internal server error" });
    }
    
})

//chaining of routes for wellnessGoals
router.get("/wellnessGoals" , async (req, res, next) => {
    try{
       const query = req.query;
       const isCookieVerified = await verifyToken(req);
       if(!isCookieVerified){
           res.status(400).send("Inalid cookie or cookie expired");
       }
       const wellnessGoals = await WellnessGoals.find({email: query.email});
       res.status(200).json(wellnessGoals);
    } catch(err){
        res.status(err.status || 500).send(err);
    }
}).post("/wellnessGoals", async (req, res, next) => {
    try{
        const isCookieVerified = await verifyToken(req);
        if(!isCookieVerified){
            res.status(400).send("Inalid cookie or cookie expired");
        }
        const wellnessGoals = new WellnessGoals({
             ...req.body
        });
        await wellnessGoals.save();
        res.status(200).json(wellnessGoals);
     } catch(err){
        res.status(err.status || 500).send(err);
    }
})

//chaining of routes for preventiveCareReminder
router.get("/preventiveCareReminder" , async (req, res, next) => {
    try{
       const query = req.query;
       const isCookieVerified = await verifyToken(req);
       if(!isCookieVerified){
           res.status(400).send("Inalid cookie or cookie expired");
       }
       const preventiveCareReminder = await PreventiveCare.find({email: query.email});
       res.status(200).json(preventiveCareReminder);
    } catch(err){
        res.status(err.status || 500).send(err);
    }
}).post("/preventiveCareReminder", async (req, res, next) => {
    try{
        const isCookieVerified = await verifyToken(req);
        if(!isCookieVerified){
            res.status(400).send("Inalid cookie or cookie expired");
        }
        const preventiveCare = new PreventiveCare({
             ...req.body,
             date:new Date()
        });
        await preventiveCare.save();
        res.status(200).json(preventiveCare);
     } catch(err){
         res.status(err.status || 500).send(err);
     }
})

//healthtips
router.get("/healthtips" , async (req, res, next) => {
    try{
       const query = req.query;
    //    const isCookieVerified = await verifyToken(req);
    //    if(!isCookieVerified){
    //        res.status(400).send("Inalid cookie or cookie expired");
    //    }
       const healthTips = await HealthTips.find({email: query.email});
       res.status(200).json(healthTips);
    } catch(err){
        res.status(err.status || 500).send(err);
    }
}).post("/healthtips" , async (req, res, next) => {
    try{
    //    const query = req.query;
       const isCookieVerified = await verifyToken(req);
       if(!isCookieVerified){
           res.status(400).send("Inalid cookie or cookie expired");
       }
       const healthTips = new HealthTips({...req.body });
       await healthTips.save();
       res.status(200).json(healthTips);
    } catch(err){
        res.status(err.status || 500).send(err);
    }
})

module.exports = router;