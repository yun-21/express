const express = require("express");
const app = express()
// 로깅 미들웨어
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
  });
app.get('/',(req,res)=>{
    res.type('text/plain')
    console.log(req.header)
    res.send("안녕")
})

app.listen(8080)