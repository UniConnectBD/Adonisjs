import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'student_profiles'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()
      table.integer('user_id').notNullable().unsigned().references('users.id')
      table.integer('university_id').notNullable().unsigned().references('universities.id')
      table.integer('student_uni_id').notNullable().unsigned()
      table.dateTime('graduation_date').notNullable()
      table.dateTime('enrollment_date').notNullable()
      table.boolean('is_active').notNullable()
      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
