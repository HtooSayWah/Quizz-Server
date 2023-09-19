const postController = require('../controller/post')
const express = require('express')
//const validator = require('../Validator');
const router = express.Router();
// const getPosts =(req,res) =>{
//     //res.send("hello world from node js and separating routes")

// }

router.get('/',postController.getPosts)
//router.post("/post",validator.createPostValidator,postController.createPost);
router.post("/post",postController.createPost);
router.post("/user",postController.createUser);
router.post("/multiQues",postController.createMultipleChoice);
router.post("/signIn",postController.userSignIn);

module.exports= router;