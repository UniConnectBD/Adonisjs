import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class RolePermission extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare roll_id: number

  @column({ isPrimary: true })
  declare permission_id: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
