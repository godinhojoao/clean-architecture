import { UserEntity } from '../../domain/entities'

export class UserViewModel {
  name: string
  email: string
  password: string

  static map (entity: UserEntity): UserViewModel {
    const userViewModel = { ...entity }
    delete userViewModel.id

    return userViewModel
  }

  static mapCollection (entities: UserEntity[]): UserViewModel[] {
    return entities.map(entity => UserViewModel.map(entity))
  }
}
