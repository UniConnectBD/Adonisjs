import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class IdCard extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare student_profile_id: number

  @column()
  declare card_number: number

  @column()
  declare totp_secret: string

  @column()
  declare issued_at: DateTime

  @column()
  declare valid_untill: DateTime

  @column()
  declare is_active: boolean

  @column()
  declare status: string

  @column()
  declare last_validate_at: DateTime

  @column()
  declare validation_count: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
