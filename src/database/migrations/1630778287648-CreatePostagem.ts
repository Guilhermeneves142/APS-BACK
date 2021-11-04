import {MigrationInterface, QueryRunner, Table, TableColumn} from "typeorm";

export class CreatePostagem1630778287648 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
            name: "postagem",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true
                },
                {
                    name: "id_autoridade",
                    type: "uuid",
                    isNullable: true
                },
                {
                    name: "titulo",
                    type: "varchar"
                },
                {
                    name: "mensagem",
                    type: "varchar"
                },
                {
                    name: "data_criacao",
                    type: "varchar",
                    default: "now()"
                },
                {
                    name: "id_status",
                    type: "uuid"
                },
                {
                    name: "comentario",
                    type: "varchar",
                    isNullable: true
                },
                {
                    name: "endereco",
                    type: "varchar"
                }
            ],
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("postagem");
    }

}
