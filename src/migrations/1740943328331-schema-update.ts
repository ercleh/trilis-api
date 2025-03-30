import { MigrationInterface, QueryRunner } from "typeorm";

export class SchemaUpdate1740943328331 implements MigrationInterface {
    name = 'SchemaUpdate1740943328331'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`param_key_value\` DROP COLUMN \`description\``);
        await queryRunner.query(`ALTER TABLE \`param_key_value\` DROP COLUMN \`type\``);
        await queryRunner.query(`ALTER TABLE \`param_key_value\` DROP COLUMN \`value\``);
        await queryRunner.query(`ALTER TABLE \`company\` DROP COLUMN \`updateAt\``);
        await queryRunner.query(`ALTER TABLE \`param_key_value\` ADD \`value\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`param_key_value\` ADD \`description\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`param_key_value\` ADD \`type\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`company\` ADD \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`company\` ADD \`iconPath\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`company\` ADD \`color\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`company\` DROP COLUMN \`color\``);
        await queryRunner.query(`ALTER TABLE \`company\` DROP COLUMN \`iconPath\``);
        await queryRunner.query(`ALTER TABLE \`company\` DROP COLUMN \`updatedAt\``);
        await queryRunner.query(`ALTER TABLE \`param_key_value\` DROP COLUMN \`type\``);
        await queryRunner.query(`ALTER TABLE \`param_key_value\` DROP COLUMN \`description\``);
        await queryRunner.query(`ALTER TABLE \`param_key_value\` DROP COLUMN \`value\``);
        await queryRunner.query(`ALTER TABLE \`company\` ADD \`updateAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`param_key_value\` ADD \`value\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`param_key_value\` ADD \`type\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`param_key_value\` ADD \`description\` varchar(255) NOT NULL`);
    }

}
