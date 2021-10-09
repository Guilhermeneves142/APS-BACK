import { EntityRepository, Repository } from "typeorm";
import { Autoridade } from "../entities/Autoridade";

@EntityRepository(Autoridade)
class AutoridadeRepository extends Repository<Autoridade>{

}

export { AutoridadeRepository }