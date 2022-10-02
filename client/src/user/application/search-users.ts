import { User } from "../domain/user"
import { UserRepository } from "../domain/user-repository"

export interface SearchUsersCriteria {
  name: string
}

export const searchUsers = async (
  userRepository: UserRepository,
  criteria: SearchUsersCriteria
) => {
  return await userRepository.searchUsers(criteria) as User[]
}
