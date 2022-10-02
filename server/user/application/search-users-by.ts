import { UserRepository } from "../domain/user-repository"

export interface SearchUsersCriteria {
  name?: string
}

export const searchUsersBy = (userRepository: UserRepository, criteria: SearchUsersCriteria) => {
  return userRepository.searchUsers(criteria)
}
