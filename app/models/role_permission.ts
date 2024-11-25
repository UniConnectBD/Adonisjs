import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Permission from './permission.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Role from './role.js'

export default class RolePermission extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare roll_id: number

  @column()
  declare permission_id: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Role)
  declare role: BelongsTo<typeof Role>

  @belongsTo(() => Permission)
  declare permission: BelongsTo<typeof Permission>
}
