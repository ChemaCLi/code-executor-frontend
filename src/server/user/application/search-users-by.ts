import { UserRepository } from "../domain/user-repository"

export interface SearchUsersCriteria {
  name?: string
}

export const searchUsersBy = (
  criteria: SearchUsersCriteria,
  userRepository: UserRepository
) => {
  return userRepository.searchUsers(criteria)
}
