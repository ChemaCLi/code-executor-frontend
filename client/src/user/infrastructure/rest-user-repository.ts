import { UserRepository } from "../domain/user-repository"

export const restUserRepository: UserRepository = () => {
  return {
    createUser: args => ({}),
    updateUser: args => ({}),
    findUser: args => ({ id: "", name: "", email: "" }),
    searchUsers: criteria => []
  }
}
