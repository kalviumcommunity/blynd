require("dotenv").config();

const express = require("express");
const mongoose =  require('mongoose')
const UserRoutes = require("./routes/BlyndUser");

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
