const app = require("./app.js").app;
const dbConnect = require("./Database/database.js").dbConnect;


const port = process.env.PORT || 8000;


dbConnect();
app.listen(port, ()=>{
    console.log(`Server running on the port ${port}`);
    
})
