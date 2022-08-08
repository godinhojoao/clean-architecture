import { AddUser, AddUserEntity, AddUserRepository, UserModel } from './db-add-user-contracts'

export class DbAddUser implements AddUser {
  constructor (
    private readonly addUserRepository: AddUserRepository
    // receive by dependency injection the repository that hashes the password here
  ) { }

  async add (user: AddUserEntity): Promise<UserModel> {
    // hash user's password here
    const newUser = await this.addUserRepository.add(user)
    return newUser
  }
}
