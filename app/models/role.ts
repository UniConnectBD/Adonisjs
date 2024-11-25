import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import RolePermission from './role_permission.js'

export default class Role extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare description: string

  @column()
  declare is_university_scoped: boolean

  @column()
  declare is_system_role: boolean

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasMany(() => Role, {
    localKey: 'id',
    foreignKey: 'role_id',
  })
  declare role: HasMany<typeof Role>
  @hasMany(() => RolePermission, {
    localKey: 'id',
    foreignKey: 'role_id',
  })
  declare rolepermission: HasMany<typeof RolePermission>
}
