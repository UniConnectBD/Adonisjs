import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'enrollment_batches'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()
      table.integer('university_id').notNullable().unsigned().references('universities.id')
      table.dateTime('academic_year').notNullable()
      table.string('semester').notNullable()
      table.dateTime('enrollment_start').notNullable()
      table.dateTime('enrollment_end').notNullable()
      table.string('status').notNullable()
      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
