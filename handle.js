const express = require('express')
const {engine : test} = require('express-handlebars')
const app = express()
const port = 8080;

//핸들바 뷰 엔진 설정
app.engine('handlebars', test({
    defaultLayout : 'logo',
}))
app.set('view engine', 'handlebars')

app.use(express.static(__dirname+'/public'))

app.get('/',(req,res)=> res.render('home'))

app.get('/about',(req,res)=> res.render('about'))

app.use((req,res)=>{
    res.status(404)
    res.render('404')
})

app.use((err,req,res,next)=>{
    console.error(err.message)
    res.status(500)
    res.render('500')
})
app.listen(port, ()=>console.log(
    `Express started on http://localhost:${port}; `+
    `press Ctrl-C to terminate`))