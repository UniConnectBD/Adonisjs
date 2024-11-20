/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const HomeController = () => import('#controllers/home_controller')

const UniversitiesController = () => import('#controllers/universities_controller')

import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'
const RegistersController = () => import('#controllers/registers_controller')

router.get('/', [HomeController, 'index'])

router
  .group(() => {
    router
      .group(() => {
        router.get('/university', [UniversitiesController, 'index'])
        router.post('/university', [UniversitiesController, 'store'])
        router.patch('/university/:id', [UniversitiesController, 'update'])
      })
      .use(middleware.auth())

    router.post('/register', [RegistersController, 'index'])
    router.post('/login', [RegistersController, 'login'])
    router.post('/logout', [RegistersController, 'logout'])
  })
  .prefix('api')

router.get('/health', async ({ response }) => {
  return response.status(200).send({ status: 'healthy' })
})
