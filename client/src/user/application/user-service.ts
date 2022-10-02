import { createUser, CreateUserData } from "./create-user"
import { UserRepository } from "../domain/user-repository"

export const userService = (userRepository: UserRepository) => {
  return {
    createUser: (data: CreateUserData) => createUser(userRepository, data)
  }
}
