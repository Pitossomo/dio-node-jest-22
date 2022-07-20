import { UsersController } from "./usersController"
import { Request } from "express"
import { makeMockResponse } from "../mocks/mockResponse"

describe('Users Controller', () => {
  it('deve somar 1+1', () => {
    const sum = (a:number, b: number):number => a+b // Arrange
    const result = sum(1,1) // Act     
    expect(result).toBe(2) // Assert
  })

  // Arrange
  const usersController = new UsersController()
  const mockRequest = {} as Request
  const mockResponse = makeMockResponse()

  it('Deve listar os nossos usuários', () => {
    usersController.getAllUsers(mockRequest, mockResponse)  // Act

    // Assert
    expect(mockResponse.state.status).toBe(200)     // 200 = Status code expected when the method is successful
    expect(mockResponse.state.json).toHaveLength(4) // 4 = Original size of users' database array
  })

  it('Deve criar um novo usuário', () => {
    mockRequest.body = { name: "Pitossomo" }

    usersController.createUser(mockRequest, mockResponse)  // Act

    // Assert
    expect(mockResponse.state.status).toBe(201)     // 201 = Status code expected when the method is successful
    expect(mockResponse.state.json).toMatchObject({message: 'Usuário Pitossomo criado'})
  })

  it('Não deve criar um novo usuário com nome em branco', () => {
    mockRequest.body = { name: "" }

    usersController.createUser(mockRequest, mockResponse)  // Act

    // Assert
    expect(mockResponse.state.status).toBe(403)
    expect(mockResponse.state.json).toMatchObject({message: 'Não é possível criar usuário sem nome'})
  })
})
