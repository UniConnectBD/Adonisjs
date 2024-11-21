import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'id_cards'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('student_profile_id').notNullable().unsigned().references('student_profile.Id')
      table.integer('card_number').notNullable()
      table.string('totp_secret').notNullable()
      table.dateTime('issued_at').notNullable()
      table.dateTime('valid_untill').notNullable()
      table.boolean('is_active').notNullable()
      table.string('status').notNullable()
      table.dateTime('last_validate_at').notNullable
      table.integer('validation_count').notNullable()
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
