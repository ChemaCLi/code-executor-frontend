import { createUser, CreateUserData } from "./create-user"
import { UserRepository } from "../domain/user-repository"
import {User} from "../domain/user";

export const userService: UserService = userRepository => {
  return {
    createUser: data => createUser(userRepository, data)
  }
}

export type UserService = (userRepository: UserRepository) => ({
  createUser: (data: CreateUserData) => Partial<User>
})
