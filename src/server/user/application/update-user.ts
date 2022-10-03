import { UserRepository } from "../domain/user-repository"
import { User } from "../../../shared-logic/user/domain/user"

export interface UpdateUserData {
  id: string
  name?: string
}

export const updateUser = async (
  data: UpdateUserData,
  userRepository: UserRepository
) => {
  const userToUpdate = new User(data)
  return userRepository.updateUser(userToUpdate)
}
