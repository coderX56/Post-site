const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const path = require("path");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const { request } = require("http");

const users=mongoose.model("xyz",{
    username:String,
    email:String,
    password:String,
    posts:[{type:mongoose.Schema.Types.ObjectId,ref:'posts'}]
})
const posts=mongoose.model("xyz",{
    user:{type:mongoose.Schema.Types.ObjectId,ref:"users"},
    content:String,
    date:{type:Date,default:Date.now},
})
app.post("/post/create", async(req,res)=>{
     await posts.create({
        user:
        content:req.body.content,
     })
})