import { MigrationInterface, QueryRunner } from "typeorm";

export class SchemaUpdate1740942954118 implements MigrationInterface {
    name = 'SchemaUpdate1740942954118'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`param_key_value\` DROP COLUMN \`value\``);
        await queryRunner.query(`ALTER TABLE \`param_key_value\` DROP COLUMN \`description\``);
        await queryRunner.query(`ALTER TABLE \`param_key_value\` DROP COLUMN \`type\``);
        await queryRunner.query(`ALTER TABLE \`param_key_value\` ADD \`value\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`param_key_value\` ADD \`description\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`param_key_value\` ADD \`type\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`product\` ADD \`iconPath\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`product\` ADD \`common\` tinyint NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`product\` DROP COLUMN \`common\``);
        await queryRunner.query(`ALTER TABLE \`product\` DROP COLUMN \`iconPath\``);
        await queryRunner.query(`ALTER TABLE \`param_key_value\` DROP COLUMN \`type\``);
        await queryRunner.query(`ALTER TABLE \`param_key_value\` DROP COLUMN \`description\``);
        await queryRunner.query(`ALTER TABLE \`param_key_value\` DROP COLUMN \`value\``);
        await queryRunner.query(`ALTER TABLE \`param_key_value\` ADD \`type\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`param_key_value\` ADD \`description\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`param_key_value\` ADD \`value\` varchar(255) NOT NULL`);
    }

}
