import { UserRepository } from "../../domain/user-repository"
import { findUser } from "./find-user"
import { createUser } from "./create-user"
import { updateUser } from "./update-user"
import { searchUsers } from "./search-users"


export const prismaUserRepository: UserRepository =  () => {
  return {
    findUser,
    createUser,
    updateUser,
    searchUsers,
  }
}
