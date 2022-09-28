import express from 'express'

const app = express()

app.get('/games', (request, response) => {
  return response.json([])
})

app.post('/ads', (request, response) => {
  return response.status(201).json([])
})

app.get('/game/:id/ads', (request, response) => {

  return response.json([
    {
      id: 1,
      nome: 'anuncio 1'
    },
    {
      id: 2,
      nome: 'anuncio 2'
    }
  ])
})

app.get('/ads/:id/discord', (request, response) => {

  return response.json([])
})

app.listen(3333)