import { getCustomRepository } from "typeorm";
import { StatusRepository } from "../repositories/StatusRepository";

class StatusService {

  async findAll(){
    const statusRepository = getCustomRepository(StatusRepository);
    
    const status = statusRepository.find();

    return status;
  }

  async findById(id: string) {
    const statusRepository = getCustomRepository(StatusRepository);
    
    const status = statusRepository.findOne(id);

    return status;
  }
}

export {StatusService};