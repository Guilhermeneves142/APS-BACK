import { EntityRepository, Repository } from "typeorm";
import { Administrador } from "../entities/Administrador";

@EntityRepository(Administrador)
class AdministradorRepository extends Repository<Administrador>{

}

export { AdministradorRepository }