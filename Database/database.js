const mongoose = require("mongoose")

const dbConnect = () =>{
    mongoose.connect(process.env.DATABASE_URI,{
        dbName: "HumanChainAI"
    }).then((c)=>{
        console.log(`Database connected`);
    }).catch((e)=>{
        console.log(e);
        
    })
}

module.exports = {dbConnect}