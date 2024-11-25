import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import User from './user.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Role from './role.js'

export default class UserRole extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare role_id: number

  @column()
  declare user_id: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Role)
  declare role: BelongsTo<typeof Role>

  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>
}
