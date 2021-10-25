import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("administrador")
class Administrador {

  @PrimaryColumn()
  readonly id!: string;
  @Column()
  login: string;
  @Column()
  senha: string;
  @Column({name: "data_criada"})
  dataCriada: string;

  constructor() {
    if(!this.id){
      this.id = uuid();
    }
}
}

export { Administrador }