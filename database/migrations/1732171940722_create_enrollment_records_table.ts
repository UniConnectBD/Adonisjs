import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'enrollment_records'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()
      table
        .integer('enrollment_batch_id')
        .unsigned()
        .notNullable()
        .references('enrollment_batches.id')
      table.integer('student_uni_id').notNullable().unsigned()

      table.string('email').notNullable
      table.string('country_code').notNullable()
      table.string('phone').notNullable()
      table.string('first_name').notNullable()
      table.string('last_name').notNullable()
      table.string('current_varification_code').notNullable()
      table.dateTime('varification_code_expirity').notNullable()
      table.string('status').notNullable()
      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
