import { Request, Response} from "express";
import { PostagemService } from "../services/PostagemService";

class PostagemController {

  async findAll(request: Request, response: Response) {
    try{
      const filter = request.params?.filter; 
    const postagemService = new PostagemService();

    const postagens = await postagemService.findAll(filter);
    return response.json(postagens);
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
    const postagemService = new PostagemService();

    const postagem = await postagemService.findById(request.params.id);
    return response.json(postagem);
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

      const postagem = request.body;
      const postagemService = new PostagemService();

      const newPostagem = await postagemService.create(postagem);
      return response.json(newPostagem);
    }
    catch(error) {
      return response.status(500).json({
        error: "internal server error",
        status: 500
      }) 
    }
  }

}

export { PostagemController };