import { getCustomRepository } from "typeorm";
import { Administrador } from "../entities/Administrador";
import { AdministradorRepository } from "../repositories/AdministradorRepository";

class AdministradorService {

  async findAll(){
    const administradorRepository = getCustomRepository(AdministradorRepository);
    
    const status = administradorRepository.find();

    return status;
  }

  async findById(id: string) {
    const administradorRepository = getCustomRepository(AdministradorRepository);
    
    const status = administradorRepository.findOne(id);

    return status;
  }

  async create(administrador: Administrador) {

    const administradorRepository = getCustomRepository(AdministradorRepository);

    const newAdministrador = administradorRepository.create(administrador);
    return administradorRepository.save(newAdministrador);
  }
}

export {AdministradorService};