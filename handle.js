const express = require('express')
const expressHandle = require('express-handlebars')
const app = express()

//핸들바 뷰 엔진 설정
app.engine('handlebars', expressHandle({
    defaultLayout : 'main',
}))
app.set('view engine', 'handlebars')