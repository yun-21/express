const express = require('express');
const app = express()
const port = process.env.PORT || 8080

//app.get은 라우트를 추가하는 메서드이다.
app.get('/',(req,res)=>{
    res.type('text/html')
    res.send(`<h1>홈페이지</h1>`)
})

app.get('/about',(req,res)=>{
    res.type('text/plain')
    res.send('about페이지 이동')
})

//custom 404 page
app.use((req,res)=>{
    res.type('text/plain')
    res.status(404)
    res.send('404 - Not Found')
})

//custom 500 page
app.use((err,req,res,next)=>{
    console.error(err.message)
    res.type('text/plain')
    res.status(500)
    res.send('500 - Server Error')
})

app.listen(port, ()=>console.log(
    `Express started on http://localhost:${port}; `+
    `press Ctrl-C to terminate`))