import { User } from "../../../shared-logic/user/domain/user"
import { UserRepository } from "../domain/user-repository"

export interface CreateUserData {
  name: string
  email: string
}

export const createUser = async (userData: CreateUserData, userRepository: UserRepository) => {
  const userToSave = new User(userData)
  return userRepository.createUser(userToSave)
}
