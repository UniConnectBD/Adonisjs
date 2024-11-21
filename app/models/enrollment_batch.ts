import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class EnrollmentBatch extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare university_id: number

  @column()
  declare academic_year: DateTime

  @column()
  declare semester: string

  @column()
  declare enrollment_start: DateTime

  @column()
  declare enrollment_end: DateTime

  @column()
  declare status: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
