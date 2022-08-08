import { UserModel } from '../../models'
import { AddUserEntity } from '../../../domain/usecases'

export interface AddUserRepository {
  add: (userData: AddUserEntity) => Promise<UserModel>
}
