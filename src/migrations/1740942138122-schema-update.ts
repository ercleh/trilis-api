import { MigrationInterface, QueryRunner } from "typeorm";

export class SchemaUpdate1740942138122 implements MigrationInterface {
    name = 'SchemaUpdate1740942138122'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`param_key_value\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`param_key_value\` ADD \`value\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`param_key_value\` ADD \`description\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`param_key_value\` ADD \`type\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`param_key_value\` DROP COLUMN \`type\``);
        await queryRunner.query(`ALTER TABLE \`param_key_value\` DROP COLUMN \`description\``);
        await queryRunner.query(`ALTER TABLE \`param_key_value\` DROP COLUMN \`value\``);
        await queryRunner.query(`DROP TABLE \`param_key_value\``);
    }

}
