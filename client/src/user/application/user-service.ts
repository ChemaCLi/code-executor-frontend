import { User } from "../domain/user";
import { createUser, CreateUserData } from "./create-user"
import { UserRepository } from "../domain/user-repository"
import {findUser, FindUserData} from "./find-user";
import {searchUsers, SearchUsersCriteria} from "./search-users";
import {updateUser, UpdateUserData} from "./update-users";

export const userService: UserService = userRepository => {
  return {
    createUser: data => createUser(userRepository, data),
    findUser: data => findUser(userRepository, data),
    searchUsers: criteria => searchUsers(userRepository, criteria),
    updateUser: data => updateUser(userRepository, data)
  }
}

export type UserService = (userRepository: UserRepository) => ({
  createUser: (data: CreateUserData) => Promise<Partial<User>>
  findUser: (data: FindUserData) => Promise<Partial<User>>,
  searchUsers: (criteria: SearchUsersCriteria) => Promise<Partial<User>[]>,
  updateUser: (data: UpdateUserData) => Promise<Partial<User>>
})
