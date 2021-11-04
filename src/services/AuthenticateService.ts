import { getCustomRepository } from "typeorm"
import { AutoridadeRepository } from "../repositories/AutoridadeRepository"
import { AdministradorRepository } from "../repositories/AdministradorRepository"
import { sign, decode } from "jsonwebtoken";

interface IAuthenticateRequest {
  login: string;
  senha: string;
}

class AuthenticateService {

  async login(login: IAuthenticateRequest){
    const administradorRepository = getCustomRepository(AdministradorRepository);
    const autoridadeRepository = getCustomRepository(AutoridadeRepository);
    let usuario = await administradorRepository.findOne({where: [{login: login.login}]});
    let isAdmin = true;

    if (!usuario){
      isAdmin = false;
      usuario = await autoridadeRepository.findOne({where: [{login: login.login}]});
    }
    const passwordMatch = login.senha ==  usuario.senha;
    if (!passwordMatch) throw Error("user not found");

    return usuario ;
  }

  async update(login: IAuthenticateRequest){

    const administradorRepository = getCustomRepository(AdministradorRepository);
    const autoridadeRepository = getCustomRepository(AutoridadeRepository);

    let usuario = await administradorRepository.findOne({where: [{login: login.login}]});
    let isAdmin = true;

    if (!usuario){
      isAdmin = false;
      usuario = await autoridadeRepository.findOne({where: [{login: login.login}]});
    }

    usuario.login = login.login;
    usuario.senha = login.senha;

    if(isAdmin) {
      const admin = administradorRepository.create(usuario);
      return administradorRepository.save(admin);
    }
    else {
      const autoridade = autoridadeRepository.create(usuario);
      return autoridadeRepository.save(autoridade);
    }
  }

  async clarifyToken(token: string) {
    return decode(token);
  }
}

export { AuthenticateService }