const express = require('express')
const app = express()

const path = require('path')

const port = process.env.port || 3000

app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))

app.set('views', path.join(__dirname, 'views'))

app.get('/', async (req, res) => {
    res.render('curriculo')
})

app.listen(port, (err) => {
    if (err) {
        console.log('Não foi possivel iniciar o servidor')
    } else {
        console.log('servidor rodando')
    }
})