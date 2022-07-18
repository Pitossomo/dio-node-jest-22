import { Router } from 'express'
import { UsersController } from './controllers/usersController'

const routes = Router()
const usersController = new UsersController()

routes.get('/ping', (request, response) => {
  return response.status(200).send("pong") 
})

routes.get('/users', usersController.getAllUsers)

routes.post('/users', usersController.createUser)

export { routes }