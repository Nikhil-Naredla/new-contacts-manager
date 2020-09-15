const mongoose = require('mongoose')


const contactSchema =  mongoose.Schema({
   
    name : String,
    email : String,
    phone : String,
    company : String,
    address  : String,
    title : String,
     sent   :[String],
    recieved : [String],
    from : String,
    to : String,
     createdAt : {type: Date, default: Date.now}


})

module.exports = mongoose.model('Contact',contactSchema)