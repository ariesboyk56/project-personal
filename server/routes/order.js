const express = require('express')
const router = express.Router()
const verifyToken = require('../middleware/auth')

const Order = require('../models/Order')

// @route GET api/orders/:id
// @desc Get order by id
// @access 
router.get('/:id', async (req, res) => {
    const { params: { id } } = req
    try {
        const order = await Order.findById(id)
        res.status(200).json({ success: true, order })
    } catch (error) {
        console.log(error);
        res
            .status(500)
            .json({ success: false, message: "Internal server error" })
    }

})
// @route GET api/orders
// @desc Get all order
// @access 
router.get('/', async (req, res) => {
    try {
        const orders = await Order.find()
        res.status(200).json({ success: true, orders })
    } catch (error) {
        console.log(error);
        res
            .status(500)
            .json({ success: false, message: "Internal server error" })
    }

})

// @route POST api/orders
// @desc post order
// @access Private
router.post('/', verifyToken, async (req, res) => {
    const {
        customer,
        address,
        total,
        status,
        author_id,
        method
    } = req.body
    //Simple validation
    if (!customer || !address || !total || !method)
        return res
            .status(400)
            .json({ success: false, message: "Please write full information!" })
    try {
        const newOrder = new Order({
            customer,
            address,
            total,
            author_id: req.userId,
            status,
            method
        })
        await newOrder.save()
        res.json({ success: true, message: "Order successfully", order: newOrder })
    } catch (error) {
        console.log(error);
        res
            .status(500)
            .json({ success: false, message: "Internal server error" })
    }
})

// @route PUT api/orders
// @desc PUT order
// @access Private
router.put('/:id', verifyToken, async (req, res) => {
    const {
        customer,
        address,
        total,
        status,
        method
    } = req.body
    let role = req.role
    if (role === "admin") {
        // //Simple validation
        // if (!customer || !address || !total || !method)
        //     return res
        //         .status(400)
        //         .json({ success: false, message: "Please write full information!" })
        try {
            let updateOrder = {
                customer,
                address,
                total,
                status,
                method
            }
            updatedOrder = await Order.findByIdAndUpdate(req.params.id, updateOrder, { new: true })
    
            //User not authorized to update order or order not found
            if (!updatedOrder)
                return res
                    .status(401)
                    .json({ success: false, message: "User not authorized or order not found" })
    
            res
                .json({ success: true, message: "Order updated successfully", order: updatedOrder })
        } catch (error) {
            console.log(error);
            res
                .status(500)
                .json({ success: false, message: "Internal server error" })
        }
    } else {
        try {
            let updateOrder = {
                customer,
                address,
                total,
                status,
                method
            }
            console.log("updateOrder", updateOrder);
            const orderUpCondition = { _id: req.params.id, author_id: req.userId }

            updatedOrder = await Order.findOneAndUpdate(orderUpCondition, updateOrder, { new: true })

            //User not authorized to update order or order not found
            if (!updatedOrder)
                return res
                    .status(401)
                    .json({ success: false, message: "User not authorized or order not found" })

            res
                .json({ success: true, message: "Order updated successfully", order: updatedOrder })
        } catch (error) {
            console.log(error);
            res
                .status(500)
                .json({ success: false, message: "Internal server error" })
        }
    }
})

// @route DELETE api/orders
// @desc DELETE order
// @access Private
router.delete('/:id', verifyToken, async (req, res) => {
    let role = req.role
    if (role === "admin") {
        try {
            const delOrder = await Order.findByIdAndDelete(req.params.id)

            //User not authorized to update order or order not found
            if (!delOrder)
                return res
                    .status(401)
                    .json({ success: false, message: "User not authorized or order not found" })

            res
                .json({ success: true, message: "Order delete successfully", order: delOrder })
        } catch (error) {
            console.log(error);
            res
                .status(500)
                .json({ success: false, message: "Internal server error" })
        }
    } else {
        try {
            const orderDelCondition = { _id: req.params.id, author_id: req.userId }
            const delOrder = await Order.findOneAndDelete(orderDelCondition)

            //User not authorized to update order or order not found
            if (!delOrder)
                return res
                    .status(401)
                    .json({ success: false, message: "User not authorized or order not found" })

            res
                .json({ success: true, message: "Order delete successfully", order: delOrder })
        } catch (error) {
            console.log(error);
            res
                .status(500)
                .json({ success: false, message: "Internal server error" })
        }
    }

})
module.exports = router