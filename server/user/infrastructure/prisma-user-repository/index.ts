import { UserRepository } from "../../domain/user-repository"
import { findUser } from "./find-user"
import { createUser } from "./create-user"
import { updateUser } from "./update-user"
import { searchUsers } from "./search-users"
import { prisma } from "../../../shared/prisma-client/index"

export const prismaUserRepository = (): UserRepository => {
  return {
    findUser: args => findUser(args, prisma),
    createUser: args => createUser(args, prisma),
    updateUser: args => updateUser(args, prisma),
    searchUsers: args => searchUsers(args, prisma)
  }
}
