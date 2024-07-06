const express = require("express");
const app = express()
const path = require('path')
app.use(express.static(path.join(__dirname,'public')))
// 로깅 미들웨어
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
  });
  app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});


app.listen(8080)