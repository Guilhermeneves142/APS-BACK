import { getCustomRepository, Like } from "typeorm";
import { Autoridade } from "../entities/Autoridade";
import { AutoridadeRepository } from "../repositories/AutoridadeRepository";

class AutoridadeService {

  async findAll(nome?: string){
    const autoridadeRepository = getCustomRepository(AutoridadeRepository);
    if(nome){
      return autoridadeRepository.find({where: [{nome: Like(`%${nome}%`)}]});
    }
    else {
      return autoridadeRepository.find();
    }
  }

  async findById(id: string) {
    const autoridadeRepository = getCustomRepository(AutoridadeRepository);
    
    const status = autoridadeRepository.findOne(id);

    return status;
  }

  async create(autoridade: Autoridade) {
    const autoridadeRepository = getCustomRepository(AutoridadeRepository);

    const newAutoridade = autoridadeRepository.create(autoridade);
    return autoridadeRepository.save(newAutoridade);
  }
}

export {AutoridadeService};