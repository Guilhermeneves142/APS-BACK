import { Request, Response} from "express";
import { AdministradorService } from "../services/AdministradorService";

class AdministradorController {

  async findAll(request: Request, response: Response) {
    try{
    const administradorService = new AdministradorService();

    const administradores = await administradorService.findAll();
    return response.json(administradores);
    }
    catch(error) {
      return response.status(500).json({
        error: "internal server error",
        status: 500
      }) 
    }
  }

  async findById(request: Request, response: Response) {
    try{
    const administradorService = new AdministradorService();

    const administrador = await administradorService.findById(request.params.id);
    return response.json(administrador);
    }
    catch(error) {
      return response.status(500).json({
        error: "internal server error",
        status: 500
      }) 
    }
  }

  async create(request: Request, response: Response) {
    // try{

      const administrador = request.body;
      const administradorService = new AdministradorService();

      const newAdministrador = await administradorService.create(administrador);
      return response.json(newAdministrador);
    // }
    // catch(error) {
    //   return response.status(500).json({
    //     error: "internal server error",
    //     status: 500
    //   }) 
    // }
  }

}

export { AdministradorController };