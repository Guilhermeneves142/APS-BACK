import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("autoridade")
class Autoridade {

  @PrimaryColumn()
  readonly id!: string;
  @Column()
  login: string;
  @Column()
  senha: string;
  @Column()
  nome: string;
  @Column()
  grauAutoridade: string;
  @Column()
  ativo: boolean;
  @Column({name: "data_criada"})
  dataCriada: Date

  constructor() {
    if(!this.id){
      this.id = uuid();
    }
}
}

export { Autoridade }