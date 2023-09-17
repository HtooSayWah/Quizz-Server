
const {Post,User,multipleChoice} = require("../models/post");


const getPosts =(req,res) =>{
    //res.send("hello world from node js and separating routes using controller")
    const posts = Post.find()
    .select("_id title body")
    .then(posts =>{
        res.status(200).json({posts:posts})
    })
    .catch(err => console.log(err));
    //res.send();
}

const createPost = (req,res)=>{
    const post = new Post(req.body); 
    console.log("Createing Post: ",post);
 

    post.save().then((err,result)=>{
       // res.send(result);
        res.json(result);
    }).catch((err)=>{
        console.log(err);
        res.json(err)
    })

    // post.save().then((result)=>{
    //     res.status(200).json({
    //         post:result
    //     })
    // });

    
    
}

const createUser = (req,res)=>{
    const user = new User(req.body);
    console.log("Createing User: ",user);
 

    user.save().then((err,result)=>{
       // res.send(result);
        res.json(result);
    }).catch((err)=>{
        console.log(err);
        res.json(err)
    })
}

//multipleChoice
const createMultipleChoice = (req,res)=>{
    const multipleChoiceQues = new multipleChoice(req.body);
    console.log("Createing MultipleChoice: ",multipleChoiceQues);
 

    multipleChoiceQues.save().then((err,result)=>{
       // res.send(result);
        res.json(result);
    }).catch((err)=>{
        console.log(err);
        res.json(err)
    })
}

module.exports={
    getPosts,
    createPost,
    createUser,
    createMultipleChoice,
}