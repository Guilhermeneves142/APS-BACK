import {MigrationInterface, QueryRunner} from "typeorm";
import { v4 as uuid } from "uuid";

export class defaultStatus1634597511419 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`insert into status values ('${uuid()}','Pendente')`);
        await queryRunner.query(`insert into status values ('${uuid()}','Em avaliação')`);
        await queryRunner.query(`insert into status values ('${uuid()}','Concluido')`);
        await queryRunner.query(`insert into status values ('${uuid()}','Descartado')`);

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}

