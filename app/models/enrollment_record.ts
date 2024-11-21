import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class EnrollmentRecord extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare enrollment_batch_id: number

  @column()
  declare student_uni_id: number

  @column()
  declare country_code: string

  @column()
  declare phone: string

  @column()
  declare first_name: string

  @column()
  declare last_name: string

  @column()
  declare current_varification_code: string

  @column()
  declare varification_code_expirity: DateTime

  @column()
  declare status: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
