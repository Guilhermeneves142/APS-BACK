import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateAutoridade1630778301783 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table(
            {
                name: "autoridade",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "login",
                        type: "varchar",
                        isUnique: true
                    },
                    {
                        name: "senha",
                        type: "varchar"
                    },
                    {
                        name: "nome",
                        type: "varchar"
                    },
                    {
                        name: "grau_autoridade",
                        type: "varchar"
                    },
                    {
                        name: "data_criacao",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "ativo",
                        type: "boolean"
                    }
                ]
            }
        ))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("autoridade")
    }

}
