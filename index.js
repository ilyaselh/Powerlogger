const express = require("express");
const mongoose = require("mongoose");
const path = require("path")
require("dotenv/config");

const app = new express();
app.use(express.json());

//Import routes
const setRoute = require("./routes/setRoute");
const exerciseRoute = require("./routes/exerciseRoute");
const authRoute = require("./routes/auth");

//Middlewares
app.use("/set", setRoute);
app.use("/exercise", exerciseRoute);
app.use("/user", authRoute);

//Serve static assets if in production
if(process.env.NODE_ENV === "production"){
 app.use(express.static("client/build"));

 app.get("*", (req, res)=>{
   res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
 })
}

//Connecte to database
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected to database");
  }
);

//listen on the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`listenting on port ${port}`);
});
