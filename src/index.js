const express = require("express");
const app = express()
app.get('/',(req,res)=>{
    res.type('text/plain')
    console.log(req.header)
    res.send("안녕")
})
app.get("/about", (req,res)=>{
    res.render('about',{
        message : 'Hello',
        style : req.query.style,
        userid : req.cookies.userid,
        username : req.session.username
    })
})
app.listen(8080)