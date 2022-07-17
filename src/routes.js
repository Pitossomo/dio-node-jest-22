import { Router } from 'express'

const routes = Router()

const database = []

routes.get('/ping', (request, response) => {
  return response.status(200).send("pong") 
})

routes.get('/users', (request, response) => {
  return response.status(200).json(database) 
})

routes.post('/users', (request, response) => {
  const { name } = request.body   // Get the name from request's body content, which should be a new user (although we did not validated it yet)   
  database.push(name)             // Put the new user on the database
  return response.status(201).json({'message': `Usuário ${name} criado`})  // Return the saved user name as the response
})

export { routes }