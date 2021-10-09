import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Autoridade } from "./Autoridade";
import { Status } from "./Status";

@Entity("postagem")
class Postagem {

  @PrimaryColumn()
  readonly id!: string;
  @JoinColumn({ name: 'id_autoridade'})
  @ManyToOne(() => Autoridade, autoridade => autoridade.id)
  autoridade: Autoridade;
  @Column()
  mensagem: string;
  @Column()
  comentario: string;
  @Column()
  endereco: string;
  @Column({name: "data_criacao"})
  dataCriacao: Date;
  @JoinColumn({ name: 'id_status'})
  @ManyToOne(() => Status, status => status.id)
  status: Status;


  constructor() {
    if(!this.id){
      this.id = uuid();
    }
}
}

export { Postagem }