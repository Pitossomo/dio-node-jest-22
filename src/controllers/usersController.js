import userDatabase from "../model/usersDatabase.js";

const usersController = {
  getAllUsers (request, response) {
    return response.status(200).json(userDatabase) 
  },

  createUser (request, response) {
    const { name } = request.body   // Get the name from request's body content, which should be a new user (although we did not validated it yet)   
  
    // Validations
    // Reject empty name
    if (!name || name.length < 1) return response.status(403).json({message: `Não é possível criar usuário sem nome`});
    // Reject already existing name
    if (userDatabase.some(el => el.toLowerCase() === name.toLowerCase())) {
      return (response.status(403).json({message: `O nome de usuário já existe no banco de dados`}))
    }
      
    userDatabase.push(name)             // Put the new user on the database
    return response.status(201).json({message: `Usuário ${name} criado`})  // Return the saved user name as the response
   }
}

export { usersController }