import { UserRepositoryFindUser } from "../../domain/user-repository"

export const findUser: UserRepositoryFindUser = async ({ id: string }, prisma) => {
  return await prisma.user.findMany()
}
