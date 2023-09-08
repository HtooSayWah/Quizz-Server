const express = require("express")
const app = express()
const postRoutes = require("./routes/post")
const morgan = require('morgan');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config();
const bodyParser =  require('body-parser');
const cors = require('cors');
//const expressValidator = require('express-validator')
//db

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("DB connected"))

mongoose.connection.on("error", err =>{
    console.log(`DB connection error: ${err}`)
})

const myOwnMiddleWare = (re,res,next) =>{
    console.log("middleware apply!!!");
    next();
}
app.use(morgan("dev"));
app.use(myOwnMiddleWare);
app.use(bodyParser.json());
//app.use(expressValidator());

// 👇️ configure CORS
app.use(cors());

//bring in routes
//const {getPosts} = require('./routes/post')
app.use("/",postRoutes);

//middleware


const port = process.env.PORT || 8080;
app.listen(port, () =>{console.log(`A Node js API is listening from port: ${port}`)});