const express = require('express');
const router = express.Router();
const mongoose= require('mongoose');
const User = mongoose.model("User");
const bcrypt = require('bcryptjs')


router.post('/signup',(req,res)=>{
    const {name,email,password} = req.body;
    if(!email || !password || !name){
        return res.status(422).json({
            error:"Please add all fields"
        })
    }
    User.findOne({email:email})
    .then((savedUser)=>{
        if(savedUser){
            return res.status(422).json({error:"user already exists with this email"})
        }
        bcrypt.hash(password,12)
        .then(hashedpassword=>{
            const user = new User({
                email,
                password:hashedpassword,
                name
            })
    
            user.save()
            .then(user=>{
                res.json({message:"save successfully"})
            })
            .catch(err=>{
                console.log(err)
            })
        })
        
    })
    .catch(err=>{
        console.log(err)
    })
})

module.exports= router;