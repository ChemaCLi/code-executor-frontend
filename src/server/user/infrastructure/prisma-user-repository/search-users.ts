import { UserRepositorySearchUsers } from "../../domain/user-repository"

export const searchUsers: UserRepositorySearchUsers = async ({ name }, prisma) => {
  try {
    return await prisma.user.findMany({
      where: {
        name: { contains: name, mode: "insensitive" }
      }
    }) || []
  } catch (e) {
    console.error(e)
    throw e
  } finally {
    prisma?.$disconnect()
  }
}
