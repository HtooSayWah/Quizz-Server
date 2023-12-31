
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
const userSignIn = (req,res) =>{
    //db.myCol.find({"name" : "sunita"}); 
    console.log("reqest", req.body);
    const name = req.body.userName;
    const pwd = req.body.password;
    const user = User.find({"userName" : name})
    .select("_id userName password")
    .then(user =>{  
        //res.status(200).json({user:user});
        //console.log("user",user);
        if(user[0].userName == name && user[0].password == pwd){
            const loginApprove = {
                "status":true,
                "des": "login successful",
            }
            res.status(200).json(loginApprove);
        }else{
            const loginApprove = {
                "status":false,
                "des": "login fail",
            }
            res.status(200).json(loginApprove);
        }

    })
    .catch(err => console.log(err));

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
const checkUserAvailable = (username) =>{
    const user = User.find({"userName" : username})
    .select("_id title body")
    .then(user =>{
        if(user.length>0){
            const userAvailable = false;
            return userAvailable;
        }else{
            const userAvailable = true;
            return userAvailable;
        }
        
    })
    .catch(err => console.log(err));
}

const createUser = (req,res)=>{
    const user = new User(req.body);
    console.log("Createing User: ",user);
    const userAvailable = checkUserAvailable(req.body.userName);

    if(userAvailable){
        user.save().then((err,result)=>{
            // res.send(result);
             res.json(result);
         }).catch((err)=>{
             console.log(err);
             res.json(err)
         })
    }else{
        res.json({"status": "username already exist"});
    }
    
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

const getMultipleChoice = (req,res)=>{
    const multipleChoices = multipleChoice.find({"userName" : req.body.quizzName})
    .select("_id title body")
    .then(multipleChoicesRes =>{
        res.status(200).json({multipleChoices:multipleChoicesRes})
    })
    .catch(err => console.log(err));
}

module.exports={
    getPosts,
    createPost,
    createUser,
    createMultipleChoice,
    userSignIn,
    getMultipleChoice,
}