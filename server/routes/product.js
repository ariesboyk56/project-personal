const { verify } = require('argon2')
const express = require('express')
const router = express.Router()
const verifyToken = require('../middleware/auth')

const Product = require('../models/Product')

// @route GET api/products
// @desc Get product
// @access Private
router.get('/', verifyToken, async (req, res) => {
    try {
        const products = await Product.find({ user: req.userId }).populate('pro_author_id', [
            'firstName',
            'lastName'
        ])
        res.json({ success: true, products })
    } catch (error) {
        console.log(error);
        res
            .status(500)
            .json({ success: false, message: "Internal server error" })
    }
})



// @route POST api/products
// @desc Create product
// @access Private
router.post('/', verifyToken, async (req, res) => {
    const {
        pro_name,
        pro_slug,
        pro_price,
        pro_quantity,
        pro_description,
        pro_avatar,
        pro_category_id,
        pro_author_id,
        pro_sale,
        pro_status,
        pro_pay,
        create_at,
        view_counts,
        meta
    } = req.body

    //Simple validation
    if (!pro_name)
        return res
            .status(400)
            .json({ success: false, message: "Please write full information!" })

    try {
        const newProduct = new Product({
            pro_name,
            pro_slug,
            pro_price,
            pro_quantity,
            pro_description,
            pro_avatar,
            pro_category_id,
            pro_author_id: req.userId,
            pro_sale,
            pro_status: pro_status || "In stock",
            pro_pay,
            create_at,
            view_counts,
            meta
        })
        await newProduct.save()

        res
            .json({ success: true, message: "Product created successfully", product: newProduct })
    } catch (error) {
        console.log(error);
        res
            .status(500)
            .json({ success: false, message: "Internal server error" })
    }
})


// @route PUT api/products
// @desc Update product
// @access Private
router.put('/:id', verifyToken, async (req, res) => {
    const {
        pro_name,
        pro_slug,
        pro_price,
        pro_quantity,
        pro_description,
        pro_avatar,
        pro_category_id,
        pro_sale,
        pro_status,
        pro_pay,
        update_at,
        update_by,
        view_counts,
    } = req.body

    //Simple validation
    if (!pro_name)
        return res
            .status(400)
            .json({ success: false, message: "Please write full information!" })

    try {
        let updatedProduct = {
            pro_name,
            pro_slug,
            pro_price,
            pro_quantity,
            pro_description,
            pro_avatar,
            pro_category_id,
            pro_sale,
            pro_status,
            pro_pay,
            update_at,
            update_by: req.userId,
            view_counts,
        }
        const proUpCondition = { _id: req.params.id, pro_author_id: req.userId }

        updatedProduct = await Product.findOneAndUpdate(proUpCondition, updatedProduct, { new: true })

        //User not authorized to update product or product not found
        if (!updatedProduct)
            return res
                .status(401)
                .json({ success: false, message: "User not authorized or product not found" })

        res
            .json({ success: true, message: "Product updated successfully", product: updatedProduct })
    } catch (error) {
        console.log(error);
        res
            .status(500)
            .json({ success: false, message: "Internal server error" })
    }
})

// @route DELETE api/products
// @desc Delete product
// @access Private
router.delete('/:id', verifyToken, async(req, res) => {
    try {
        const proDelCondition = { _id: req.params.id, pro_author_id: req.userId }
        const delProduct = await Product.findOneAndDelete(proDelCondition)

        //User not authorized to update product or product not found
        if (!delProduct)
            return res
                .status(401)
                .json({ success: false, message: "User not authorized or product not found" })

        res
            .json({ success: true, message: "Product delete successfully", product: delProduct })
    } catch (error) {
        console.log(error);
        res
            .status(500)
            .json({ success: false, message: "Internal server error" })
    }
})


module.exports = router