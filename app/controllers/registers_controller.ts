import User from '#models/user'
import { loginValidator, registerValidator } from '#validators/auth'

import { HttpContext } from '@adonisjs/core/http'

export default class RegistersController {
  async index({ request, response }: HttpContext) {
    const validatedData = await request.validateUsing(registerValidator)
    const user = await User.create(validatedData)

    return response.created(user)
  }

  async login({ request, response }: HttpContext) {
    const { email, password } = await request.validateUsing(loginValidator)

    try {
      const user = await User.verifyCredentials(email, password)
      const token = await User.accessTokens.create(user)
      //   return response.json({
      //     status: 200,
      //     message: 'Logged in successfully',
      //     token: token.toJSON(),
      //   })
      return response.ok({
        token: token,
        ...user.serialize(),
      })
    } catch (error) {
      return response.unauthorized('invalid Credential')
    }
  }
  public async logout({ auth, response }: HttpContext) {
    try {
      const authUser = await auth.authenticate()
      const identifier = authUser.currentAccessToken.identifier
      const userId = authUser.id
      const user = await User.findOrFail(userId)
      await User.accessTokens.delete(user, identifier)
      return response.json({ Mess: 'logOut Succesfully' })
      // const user = await auth.getUserOrFail()
      // const token = await auth.user?.currentAccessToken.identifier
      // if (!token) {
      //   return response.badRequest({ message: 'Token not found' })
      // }
      // await User.accessTokens.delete(user, token)
      // return response.ok({ message: 'Logged out' })
    } catch (error) {
      console.log(error)
    }
  }
}
