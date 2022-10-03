import { UserRepositoryDeleteUser } from "../../domain/user-repository"

export const deleteUser: UserRepositoryDeleteUser = async ({ id }, prisma) => {
  return await prisma.user.delete({
    where: { id }
  })
}
