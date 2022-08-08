import { HttpRequest, HttpResponse, Controller, UserViewModel, UserModel, AddUser } from './signup-contracts'

export class SignUpController implements Controller {
  constructor (
    private readonly dbAddUser: AddUser
    // inject validation service from dataLayer here
  ) { }

  async handle (httpRequest: HttpRequest<UserViewModel>): Promise<HttpResponse<UserModel>> {
    try {
      // const validationError = this.userValidation.validate(httpRequest.body)

      // if (!valid) {
      // return errorHelper(validationError)
      // }

      const { name, email, password } = httpRequest.body
      const user = await this.dbAddUser.add({ name, email, password })

      // create a helper to success and errors
      return {
        statusCode: 200,
        body: user
      }
    } catch (error) {
      // return formatted error here using the errorHelper
    }
  }
}
