const express = require('express');
const router = express.Router();
const User = require('../models/user');

// tao user moi
router.post('/users', async (req, res) => {
    const { name, email, age } = req.body;
    try{
        const newUser = new User({name, email, age});
        await newUser.save();
        res.status(200).json(newUser);
    }catch (error){
        res.status(500).json({message:'vui long nhap day du thong tin nguoi dung'});
    }
});

// lay danh sach user
router.get('/users', async (req, res) => {
    try{
        const users = await User.find();
        res.json(users);
    }catch (error){
        res.status(500).json({message:'loi khi lay danh sach'});
    }
});

// sua thong tin user
router.put('/users/:id', async (req, res) => {
    const {name, email, age} = req.body;
    try{
        const user = await User.findByIdAndUpdate(req.params.id , {name , email , age} ,{new : true});
        res.json(user);
    }catch (error){
        res.status(400).json({message:'Khong tim thay nguoi dung hoac co loi xay ra'});
    }
});

// xoa user
router.delete('/users/:id', async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.json({message: "Nguoi dung da duoc xoa"});
    }catch (error){
        res.status(400).json({message : "Khong tin thay nguoi dung"})
    }
});

module.exports = router;