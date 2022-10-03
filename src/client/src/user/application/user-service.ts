import { UserRepository } from "../domain/user-repository"
import { User } from "../../../../shared-logic/user/domain/user"
import { findUser, FindUserData } from "./find-user"
import { createUser, CreateUserData } from "./create-user"
import { updateUser, UpdateUserData } from "./update-users"
import { searchUsers, SearchUsersCriteria } from "./search-users"
import { deleteUserBy, DeleteByIdUserData } from "./delete-by-id"

export const userService: UserService = userRepository => {
  return {
    findUser: data => findUser(data, userRepository),
    updateUser: data => updateUser(data, userRepository),
    createUser: data => createUser(data, userRepository),
    searchUsers: criteria => searchUsers(criteria, userRepository),
    deleteById: criteria => deleteUserBy(criteria, userRepository)
  }
}

export type UserService = (userRepository: UserRepository) => ({
  createUser: (data: CreateUserData) => Promise<Partial<User>>
  findUser: (data: FindUserData) => Promise<Partial<User>>,
  searchUsers: (criteria: SearchUsersCriteria) => Promise<Partial<User>[]>,
  updateUser: (data: UpdateUserData) => Promise<Partial<User>>,
  deleteById: (criteria: DeleteByIdUserData) => Promise<Partial<User>>
})
