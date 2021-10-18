import { getCustomRepository } from "typeorm"
import { AutoridadeRepository } from "../repositories/AutoridadeRepository"
import { AdministradorRepository } from "../repositories/AdministradorRepository"
import { compare } from "bcryptjs";
import { sign, decode } from "jsonwebtoken";

interface IAuthenticateRequest {
  login: string;
  senha: string;
}

class AuthenticateService {

  async login(login: IAuthenticateRequest){
    const administradorRepository = getCustomRepository(AdministradorRepository);
    const autoridadeRepository = getCustomRepository(AutoridadeRepository);
    
    let usuario = await administradorRepository.findOne({login: login.login});

    let isAdmin = true;

    if (!usuario){
      isAdmin = false;
      usuario = await autoridadeRepository.findOne({login:login.login});
    }

    if(!usuario)
    throw Error("user not found");

    const passwordMatch = await compare(login.senha,usuario.senha);

    if (!passwordMatch) throw Error("user not found");

    const token = sign(
      {
        usuario: usuario,
        isAdmin
      }, 
        "69a80d081c6b251a81dab43a2bae95ee", 
      {
        expiresIn: "1d",
        subject: usuario.id
      }
    )
    return {token} ;
  }

  async clarifyToken(token: string) {
    return decode(token);
  }
}

export { AuthenticateService }