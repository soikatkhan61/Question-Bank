const { application } = require("express");
const express = require("express");
const mongoose = require("mongoose")
const app = express();
const port = 3000 || process.env.port;







const setMiddleware = require('../backend/middleware/middleware')
const setRoutes = require('../backend/routes/route')




setMiddleware(app) 
setRoutes(app)





app.get("/", (req, res) => {
  res.send("Hello World!");
});


let mongodb_uri

//when you work in locally then you just make the condition false
if(true){
  mongodb_uri = "mongodb+srv://admin1:admin1@cluster0.m2jxcwn.mongodb.net/test"
}else{
  mongodb_uri = "mongodb://localhost:27017"
}

mongoose.connect(mongodb_uri, {useNewUrlParser: true,useUnifiedTopology: true}).then(()=>{
  console.log("mongodb is connected");
  app.listen(port,()=>{
      console.log("app is listen on port " + port)
  })
}).catch((error)=>{
  console.log("mondb not connected");
  console.log(error);
});

