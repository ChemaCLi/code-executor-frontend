import { createUser, CreateUserData } from "./create-user"
import { searchUsersBy, SearchUsersCriteria } from "./search-users-by"
import { UserRepository } from "../domain/user-repository"
import { User } from "../domain/user";

export const userService: UserService = userRepository => {
  return {
    createUser: data => createUser(userRepository, data),
    searchUsersBy: criteria => searchUsersBy(userRepository, criteria)
  }
}

export type UserService = (userRepository: UserRepository) => ({
  createUser: (data: CreateUserData) => Promise<Partial<User>>,
  searchUsersBy: (criteria: SearchUsersCriteria) => Promise<Partial<User>[]>
})
