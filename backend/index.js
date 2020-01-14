// Arquivo de teste apenas

const express = require('express')
// Depois cria uma variavel pra guardar uma instancia do expreess
const app = express()

app.get('/', (request, response) => {
    return response.json({message: 'Hello OmniStack'})
})

app.listen(3333, () => {
    console.log('Executando o servdor na porta 3333')
})