import { Request, Response} from "express";
import { AdministradorService } from "../services/AdministradorService";
import { StatusService } from "../services/StatusService";

class StatusController {

  async findAll(request: Request, response: Response) {
    try{
    const statusService = new StatusService();

    const status = await statusService.findAll();
    return response.json(status);
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
    const statusService = new StatusService();

    const status = await statusService.findById(request.params.id);
    return response.json(status);
    }
    catch(error) {
      return response.status(500).json({
        error: "internal server error",
        status: 500
      }) 
    }
  }

  async create(request: Request, response: Response) {
    try{

      const {administrador} = request.body;
      const administradorService = new AdministradorService();

      const newAdministrador = await administradorService.create(administrador);
      return response.json(newAdministrador);
    }
    catch(error) {
      return response.status(500).json({
        error: "internal server error",
        status: 500
      }) 
    }
  }

}

export { StatusController };