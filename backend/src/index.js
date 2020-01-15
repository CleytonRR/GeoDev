const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const cors = require('cors')

const app = express()
mongoose.connect('mongodb+srv://free:js2014@cluster0-a9u1k.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(3333, () => {
    console.log('Executando o servdor na porta 3333')
})