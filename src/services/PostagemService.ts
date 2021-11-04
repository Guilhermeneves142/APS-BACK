import { getCustomRepository, Like } from "typeorm";
import { Postagem } from "../entities/Postagem";
import { PostagemRepository } from "../repositories/PostagemRepository";
import { StatusRepository } from "../repositories/StatusRepository";

class PostagemService {

  async findAll(titulo?: string){
    const postagemRepository = getCustomRepository(PostagemRepository);

    let status;
    if(titulo )
      status = postagemRepository.find({where: [{titulo: Like(`%${titulo}%`)}], relations: ['status']})
    else 
      status = postagemRepository.find({relations: ['status']});

    return status;
  }

  async findById(id: string) {
    const postagemRepository = getCustomRepository(PostagemRepository);
    
    const status = postagemRepository.findOne(id,{relations:["status"]});

    return status;
  }

  async create(postagem: Postagem) {
    const postagemRepository = getCustomRepository(PostagemRepository);
    const statusRepository = getCustomRepository(StatusRepository);

    if(!postagem.id){
      const status = await statusRepository.findOne({where:[{nome: "Pendente"}]});
      postagem.status = status;
    }
    const newPostagem = postagemRepository.create(postagem);
    return postagemRepository.save(newPostagem);
  }
}

export {PostagemService};