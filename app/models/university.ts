import { DateTime } from 'luxon'
import { BaseModel, column, computed } from '@adonisjs/lucid/orm'

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
  @computed()
  get fulName() {
    return `minhaz`
  }
}
