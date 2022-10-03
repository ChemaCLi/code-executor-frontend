import { UserRepositoryFindUser } from "../../domain/user-repository"

export const findUser: UserRepositoryFindUser = async ({ id }, prisma) => {
  return await prisma.user.findUnique({ where: { id } })
}
