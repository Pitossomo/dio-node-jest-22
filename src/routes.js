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
  const newUser = (request.body)    // Get the request's body content, which should be a new user (although we did not validated it yet)   
  database.push(newUser)            // Put the new user on the database
  return response.status(200).json(newUser)  // Return the saved user as the response
})

export { routes }