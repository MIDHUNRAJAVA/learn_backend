//Load env variables
if(process.env.NODE_ENV != "production")
{
    require("dotenv").config();
}

//Import dependency
const express = require('express')


//Creat a express app
const app = express()
const port =process.env.srikutty || 3000

//Routing

app.get('/',(req,res)=>{
    res.json("Thanga kunjuu");
})


//Start the server
app.listen(port);