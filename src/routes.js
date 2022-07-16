import { Router } from 'express'

const routes = Router()

const database = []

routes.get('/ping', (requisition, response) => {
  return response.status(200).send("pong") 
})

routes.get('/users', (requisition, response) => {
  return response.status(200).json(database) 
})

// GET - ler os dados
//TODO

// POST - criar dados
// TODO

// PUT/PATCH - editar dados
// TODO

// DELETE - apagar dados
//TODO

export { routes }