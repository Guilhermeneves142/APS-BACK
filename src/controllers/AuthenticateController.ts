import { Request, Response } from "express";
import { AuthenticateService } from "../services/AuthenticateService";


class AuthenticateController {

  async login(request: Request, response: Response){
    const {login,senha} = request.body;

    const authenticateService = new AuthenticateService();

    try {   
      const token = await authenticateService.login({login,senha})

      return response.json(token)
      }
    catch (error) {
      return response.status(500).json({
        error: "internal server error",
        status: 500
      }) 
    }
  }
  async clarifyToken(request: Request, response: Response) {
      //receive token
    const authToken = request.headers.authorization;

    const authenticateService = new AuthenticateService();

    try {
      const clarify = await authenticateService.clarifyToken(authToken);
      return response.json(clarify);  
    } catch (error) {
      return response.status(500).json({
        error: "internal server error",
        status: 500
      }) 
    }
    
  }
}

export { AuthenticateController }