import {MigrationInterface, QueryRunner, TableForeignKey} from "typeorm";

export class CreateFKs1630779041064 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        
        await queryRunner.createForeignKeys("postagem",[
            new TableForeignKey({
                name: "FKAutoridade",
                columnNames: ["id_autoridade"],
                referencedColumnNames: ["id"],
                referencedTableName: "autoridade",
                onDelete: "SET NULL"
            }),
            new TableForeignKey({
                name: "FKStatus",
                columnNames: ["id_status"],
                referencedColumnNames: ["id"],
                referencedTableName: "status",
                onDelete: "SET NULL"
            })
        ]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("postagem","FKAutoridade");
        await queryRunner.dropForeignKey("postagem","FKStatus");
    }

}
