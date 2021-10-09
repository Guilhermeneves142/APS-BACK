import { getCustomRepository } from "typeorm";
import { Postagem } from "../entities/Postagem";
import { AutoridadeRepository } from "../repositories/AutoridadeRepository";

class AutoridadeService {

  async findAll(){
    const autoridadeRepository = getCustomRepository(AutoridadeRepository);
    
    const status = autoridadeRepository.find();

    return status;
  }

  async findById(id: string) {
    const autoridadeRepository = getCustomRepository(AutoridadeRepository);
    
    const status = autoridadeRepository.findOne(id);

    return status;
  }

  async create(postagem: Postagem) {
    const autoridadeRepository = getCustomRepository(AutoridadeRepository);

    const newPostagem = autoridadeRepository.create(postagem);

    return autoridadeRepository.save(newPostagem);
  }
}

export {AutoridadeService};