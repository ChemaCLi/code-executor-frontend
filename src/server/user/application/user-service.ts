import { UserRepository } from "../domain/user-repository"
import { User } from "../../../shared-logic/user/domain/user"
import { findUser, FindUserData } from "./find-user"
import { updateUser, UpdateUserData} from "./update-user"
import { createUser, CreateUserData } from "./create-user"
import { searchUsersBy, SearchUsersCriteria } from "./search-users-by"

export const userService: UserService = userRepository => {
  return {
    createUser: data => createUser(data, userRepository),
    searchUsersBy: criteria => searchUsersBy(criteria, userRepository),
    findUser: criteria => findUser(criteria, userRepository),
    updateUser: data => updateUser(data, userRepository)
  }
}

export type UserService = (userRepository: UserRepository) => ({
  createUser: (data: CreateUserData) => Promise<Partial<User>>,
  searchUsersBy: (criteria: SearchUsersCriteria) => Promise<Partial<User>[]>,
  findUser: (criteria: FindUserData) => Promise<Partial<User>>,
  updateUser: (data: UpdateUserData) => Promise<Partial<User>>
})
