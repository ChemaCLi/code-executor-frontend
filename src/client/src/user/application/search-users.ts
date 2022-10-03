import { UserRepository } from "../domain/user-repository"
import { User } from "../../../../shared-logic/user/domain/user"

export interface SearchUsersCriteria {
  name: string
}

export const searchUsers = async (
  criteria: SearchUsersCriteria,
  userRepository: UserRepository
) => {
  return await userRepository.searchUsers(criteria) as User[]
}
