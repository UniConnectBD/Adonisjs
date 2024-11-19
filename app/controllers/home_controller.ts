// import type { HttpContext } from '@adonisjs/core/http'

export default class HomeController {
  public async index() {
    return { hello: 'Minhaz' }
  }
}
