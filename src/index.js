const express = require("express");
const app = express()
app.get('/',(req,res)=>{
    res.type('text/plain')
    res.send("안녕")
})
app.listen(8080)