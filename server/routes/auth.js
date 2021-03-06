const express = require('express')
const router = express.Router()
const argon2 = require('argon2')
const jwt = require('jsonwebtoken')
const verifyToken = require('../middleware/auth')


const User = require('../models/User')

// router.get('/', (req, res) => res.send("User"))

// @route GET api/auth/
// @desc Check user logged
// @access Public
router.get('/', verifyToken, async (req, res) => {
    try {
        const user = await User.findById(req.userId).select('-password')
        if (!user)
            return res
                .status(400)
                .json({ success: false, message: "User not found" })
        res
            .json({ success: true, user })
    } catch (error) {
        console.log(error);
        res
            .status(500)
            .json({ success: false, message: "Internal server error" })
    }
})

// @route POST api/auth/register
// @desc Register user
// @access Public
router.post('/register', async (req, res) => {
    const { email,
        password,
        firstName,
        lastName,
        status,
        position
    } = req.body
    console.log("body", req.body);
    //Simple validation
    if (!email || !password || !firstName || !lastName)
        return res
            .status(400)
            .json({ success: false, message: "Please write full information!" })

    try {
        //Check for exiting email
        const user = await User.findOne({ email })

        if (user)
            return res
                .status(400)
                .json({ success: false, message: "Email already taken!" })

        //All good
        const hashedPassword = await argon2.hash(password)
        const newUser = new User({
            email,
            password: hashedPassword,
            firstName,
            lastName,
            status: status || "not activated",
            position: position || "user"

        })
        await newUser.save()

        //Return token
        const accessToken = jwt.sign({ userId: newUser._id }, process.env.ACCESS_TOKEN_SECRET)

        res
            .json({ success: true, message: "Account created successfully", accessToken })
    } catch (error) {
        console.log(error);
        res
            .status(500)
            .json({ success: false, message: "Internal server error" })
    }
})

// @route POST api/auth/login
// @desc Login user
// @access Public
router.post('/login', async (req, res) => {
    const { email, password } = req.body

    //Simple validation
    if (!email || !password)
        return res
            .status(400)
            .json({ success: false, message: "Please write email or password!" })
    try {
        //Check for exiting email
        const user = await User.findOne({ email })
        if (!user)
            return res
                .status(400)
                .json({ success: false, message: "Incorrect email or password!" })

        //Email found
        const passwordValid = await argon2.verify(user.password, password)
        if (!passwordValid)
            return res
                .status(400)
                .json({ success: false, message: "Incorrect email or password!" })

        //Return token
        const accessToken = jwt.sign({ userId: user._id }, process.env.ACCESS_TOKEN_SECRET)

        res
            .json({ success: true, message: "Account logged successfully", accessToken })
    } catch (error) {
        console.log(error);
        res
            .status(500)
            .json({ success: false, message: "Internal server error" })
    }
})

module.exports = router