import { UserRepository } from "../../domain/user-repository"
import { findUser } from "./find-user"
import { deleteUser } from "./delete-user"
import { createUser } from "./create-user"
import { updateUser } from "./update-user"
import { searchUsers } from "./search-users"

export const prismaUserRepository = (prisma): UserRepository => {
  return {
    findUser: args => findUser(args, prisma),
    deleteUser: args => deleteUser(args, prisma),
    createUser: args => createUser(args, prisma),
    updateUser: args => updateUser(args, prisma),
    searchUsers: args => searchUsers(args, prisma),
  }
}
