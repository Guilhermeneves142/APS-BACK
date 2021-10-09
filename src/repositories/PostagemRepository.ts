import { EntityRepository, Repository } from "typeorm";
import { Postagem } from "../entities/Postagem";

@EntityRepository(Postagem)
class PostagemRepository extends Repository<Postagem>{

}

export { PostagemRepository }