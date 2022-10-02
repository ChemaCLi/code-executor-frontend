import { UserRepositorySearchUsers } from "../../domain/user-repository"

export const searchUsers: UserRepositorySearchUsers = async ({ name }, prisma) => {
  try {
    return prisma.user.findMany() || []
  } catch (e) {
    console.error(e)
    throw e
  } finally {
    prisma?.$disconnect()
  }
}
