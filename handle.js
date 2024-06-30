const express = require('express')
const {engine : test} = require('express-handlebars')
const app = express()
const port = 8080;

//동적 콘텐츠
const fortunes = [
    "당신에게 오늘은 행운의 날입니다.",
    "오늘은 물을 많이 마시는게 행운이 올라가겠네요",
    "계단을 조심해야겠어요",
    "사람 많은 곳을 가면 좋은 일이 생기겠네요",
    "오늘은 독서를 하는게 좋겠어요"
]

//핸들바 뷰 엔진 설정
app.engine('handlebars', test({
    defaultLayout : 'main',
}))
app.set('view engine', 'handlebars')

//정적 콘텐츠
app.use(express.static(__dirname+'/public'))


app.get('/',(req,res)=> {
    const random = fortunes[Math.floor(Math.random()*fortunes.length)]
    res.render('home', {fortune:random})
})

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