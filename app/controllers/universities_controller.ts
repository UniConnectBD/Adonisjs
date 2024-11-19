import type { HttpContext } from '@adonisjs/core/http'

import University from '#models/university'

export default class UniversitiesController {
  public async index({ request }: HttpContext) {
    const page = request.input('page', 1)
    const limit = request.input('per_page', 4)
    const todos = await University.query().paginate(page, limit)
    return todos.toJSON()
    // const todos = await University.all()
    // return todos.map((todo) => todo.serialize({ fields: ['id', 'name'] }))
    // return todos
  }
  public async store({ request, response }: HttpContext) {
    await University.create({
      name: request.input('name'),
      code: request.input('code'),
      is_active: true,
    })
    return response.status(201).json({
      message: 'Created',
    })
  }
  public async update({ request, response, params }: HttpContext) {
    const university = await University.findOrFail(params.id)
    university.name = request.input('name')
    university.code = request.input('code')
    await university.save()
    return response.status(201).json({
      message: 'Updated',
      payload: university,
    })
  }
}
