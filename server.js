const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const morgan = require('morgan')


mongoose.connect('mongodb+srv://nikhil:nikhil123@cluster0.nrfri.mongodb.net/<dbname>?retryWrites=true&w=majority',{
    useNewUrlParser:true,useUnifiedTopology:true
}).then(()=>console.log(`db connected`)).catch(e=>console.log(e))
const app = express()

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

// routes

const contactRoutes = require('./routes/contactRoutes')
app.use('/main',contactRoutes)

const port = process.env.PORT || 1000
app.listen(port ,()=>{
    console.log(`server running on ${port}`)
})