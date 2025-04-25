const express = require("express");
require("dotenv").config();
const incidentRouter = require("./Routes/incidents.routes.js")



const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}))


app.use('/incidents', incidentRouter)


module.exports = {app}


app.get("/", (req,res)=>{
    res.send("Server working Properly")
})