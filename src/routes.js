import { Router } from 'express'
import { usersController } from './controllers/usersController.js'

const routes = Router()

routes.get('/ping', (request, response) => {
  return response.status(200).send("pong") 
})

routes.get('/users', usersController.getAllUsers)

routes.post('/users', usersController.createUser)

export { routes }