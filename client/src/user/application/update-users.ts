import { User } from "../domain/user"
import { UserRepository } from "../domain/user-repository"

export interface UpdateUserData {
  id: string,
  name: string
}

export const updateUser = async (userRepository: UserRepository, data: UpdateUserData) => {
  return await userRepository.updateUser(data) as User
}
