import { DateTime } from 'luxon'
import { BaseModel, column, computed, hasMany } from '@adonisjs/lucid/orm'
import UserRole from './user_role.js'
import type { HasMany } from '@adonisjs/lucid/types/relations'

export default class University extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare code: string

  @column()
  declare is_active: boolean

  @column.dateTime({
    autoCreate: true,
    serialize: (value: DateTime) => value.toFormat('yyyy LLL dd'),
  })
  declare createdAt: DateTime

  @column.dateTime({
    autoCreate: true,
    autoUpdate: true,
    serialize: (value: DateTime) => value.toFormat('yyyy LLL dd'),
  })
  declare updatedAt: DateTime

  @hasMany(() => UserRole)
  declare userrole: HasMany<typeof UserRole>
  @computed()
  get fulName() {
    return `minhaz`
  }
}
