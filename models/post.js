const mongoose = require('mongoose')
const postSchema = new mongoose.Schema({
    title:{
        type:String,
        required: "Title is required",
        minLength:4,
        maxLength:150
    },
    body:{
        type:String,
        required: "Body is required",
        minLength:4,
        maxLength:2000
    }
});

const userSchema = new mongoose.Schema({
    userName:{
        type:String,
        required: "Title is required",
        minLength:4,
        maxLength:20
    },
    email:{
        type:String,
        required: "Email is required",
        minLength:8,
        maxLength:50
    },
    password:{
        type:String,
        required: "Password is required",
        minLength:8,
        maxLength:50
    },
})
const Post = mongoose.model("Post",postSchema);
const User = mongoose.model("User",userSchema);

module.exports = {
    Post,
    User
}
