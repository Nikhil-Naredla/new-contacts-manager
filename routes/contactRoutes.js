const Contact = require('../models/Contact')

const router = require('express').Router()
const mongoose = require('mongoose')

// create contact 

router.post('/contact',async(req,res)=>{

   try {
    const contact = await Contact.create(req.body)

    res.status(201).json({
        success : true,
    contact : contact,
msg : 'successfully created contact'    })
       
   } catch (error) {
       res.status(500).json({
           success : false,
           msg : 'internal server error'
       })
       
   }

}

)


router.get('/contact',async(req,res)=>{
    try {
        const contact = await Contact.find()
    
        res.status(200).json({
            success : true,
            contact : contact,
             msg : 'successful'    })
           
       } catch (error) {
           res.status(500).json({
               success : false,
               msg : 'internal server error'
           })
           
       }
})


router.get('/contact/:id',async(req,res)=>{

    try {
        console.log(req.params.id)
           const id =req.params.id
     const contact = await Contact.findOne({_id :id} )
     console.log(contact)
 
     res.status(201).json({
         success : true,
     contact : contact,
 msg : 'successfully getting contact'    })
        
    } catch (err) {
        res.status(500).json({
            success : false,
            msg : 'internal server error',
            err : err
        })
        
    }
 
 }
 
 )




router.put('/contact/:id',async(req,res)=>{

    try {
        
     const contact = await Contact.findByIdAndUpdate(req.params.id,req.body,{
         new :true
     })
 
     res.status(201).json({
         success : true,
     contact : contact,
 msg : 'successfully updated contact'    })
        
    } catch (error) {
        res.status(500).json({
            success : false,
            msg : 'internal server error'
        })
        
    }
 
 }
 
 )



module.exports = router