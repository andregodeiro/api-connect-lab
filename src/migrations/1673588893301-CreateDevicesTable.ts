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
            name: 'photourl',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'type',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'madeby',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'virtual_id',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'ip_address',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'mac_address',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'signal',
            type: 'varchar',
            isNullable: true,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('devices');
  }
}
