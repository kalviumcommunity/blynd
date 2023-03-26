require("dotenv").config();
const cookieSession = require("cookie-session");
const cors =  require('cors')
const passport = require("passport")
const passportSetup = require("./passport")
const express = require("express");
const mongoose =  require('mongoose')
const UserRoutes = require("./routes/BlyndUser");
const authRoutes = require("./routes/auth")
const signupLoginUserRoutes = require("./routes/user.js");

// express app
const app = express();

app.use(
  cookieSession({
    name:"session",
    keys:["blynd"],
    maxAge:24*60*60*100,
  })
)

app.use(passport.initialize())
app.use(passport.session())

app.use(cors({
  origin:"http://localhost:3000",
  methods:"GET,POST,PUT,DELETE",
  credentials: true,
}))


// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/profiles", UserRoutes);
app.use("/api/user", signupLoginUserRoutes);
app.use("/auth", authRoutes)



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
