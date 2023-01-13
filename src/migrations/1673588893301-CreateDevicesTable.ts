import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateDevicesTable1673588893301 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'devices',
        columns: [
          {
            name: '_id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'name',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'type',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'madeBy',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'photoUrl',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'info',
            type: 'json',
            isNullable: false,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('devices');
  }
}
