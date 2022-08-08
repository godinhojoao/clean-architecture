import { UserEntity } from '../entities'

export interface AddUserEntity {
  name: string
  email: string
  password: string
}

export interface AddUser {
  add: (user: AddUserEntity) => Promise<UserEntity>
}
