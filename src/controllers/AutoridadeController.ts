import { Request, Response} from "express";
import { AutoridadeService } from "../services/AutoridadeService";

class AutoridadeController {

  async findAll(request: Request, response: Response) {
    try{

    const nome = request.params?.nome; 
    const autoridadeService = new AutoridadeService();

    const autoridades = await autoridadeService.findAll(nome);
    return response.json(autoridades);
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
    const autoridadeService = new AutoridadeService();

    const autoridade = await autoridadeService.findById(request.params.id);
    return response.json(autoridade);
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

      const {autoridade} = request.body;
      const autoridadeService = new AutoridadeService();

      const newAutoridade = await autoridadeService.create(autoridade);
      return response.json(newAutoridade);
    }
    catch(error) {
      return response.status(500).json({
        error: "internal server error",
        status: 500
      }) 
    }
  }

}

export { AutoridadeController };