require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

const authRouter = require("./routes/auth")
const productRouter = require("./routes/product")

const connectDB = async () =>{
    try {
        await mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@database-shop.im72c.mongodb.net/database-shop?retryWrites=true&w=majority`,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("MongoDB connected");
    } catch (error) {
        console.log(error.message);
        process.exit(1)
    }
}

connectDB()

const app = express()
app.use(express.json())

// app.get('/', (req, res) => res.send('hello word'))
app.use('/api/auth', authRouter)
app.use('/api/products', productRouter)

const POST = 5050

app.listen(POST,()=>console.log(`server started on post: ${POST}`))