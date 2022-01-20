const jwt = require('jsonwebtoken')
const User = require('../models/User')
// Authorization: Bearer asdsadwewqeqwe26qewq4e9qwe

const verifyToken = async (req, res, next) => {
    const authHeader = req.header('Authorization')
    const token = authHeader && authHeader.split(' ')[1]
    if(!token)
    return res
        .status(401)
        .json({success: false, message: "Access token not found"})
    try {
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
        req.userId = decoded.userId
        const user = await User.findById(req.userId).select('-password')
        req.role = user.position
        next()
    } catch (error) {
        console.log(error);
        return res.status(403).json({success: false, message: "Invalid token"})
    }
}

module.exports = verifyToken