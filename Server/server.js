require("dotenv").config();

const express = require("express");
const mongoose =  require('mongoose')
const UserRoutes = require("./routes/BlyndUser");
const signupLoginUserRoutes = require("./routes/user.js");

// express app
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/profiles", UserRoutes);
app.use("/api/user", signupLoginUserRoutes);


//connect to db
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URI)
.then(()=>{

})
.catch((err)=>{
    console.log(err);
})

// listen for requests
app.listen(process.env.PORT, () => {
  console.log("conected to db & listening on port", process.env.PORT);
});
