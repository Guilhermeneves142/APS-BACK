import { getCustomRepository } from "typeorm";
import { Postagem } from "../entities/Postagem";
import { PostagemRepository } from "../repositories/PostagemRepository";

class PostagemService {

  async findAll(){
    const postagemRepository = getCustomRepository(PostagemRepository);
    
    const status = postagemRepository.find();

    return status;
  }

  async findById(id: string) {
    const postagemRepository = getCustomRepository(PostagemRepository);
    
    const status = postagemRepository.findOne(id);

    return status;
  }

  async create(postagem: Postagem) {
    const postagemRepository = getCustomRepository(PostagemRepository);

    const newPostagem = postagemRepository.create(postagem);

    return postagemRepository.save(newPostagem);
  }
}

export {PostagemService};