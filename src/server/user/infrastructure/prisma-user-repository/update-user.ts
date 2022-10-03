import { UserRepositoryUpdateUser } from "../../domain/user-repository"
import { User } from "../../../../shared-logic/user/domain/user"

export const updateUser: UserRepositoryUpdateUser = async ({ id, name }, prisma) => {
  if (!id) throw new Error("The id is required to update an user")

  const updatedUser = await prisma.user.update({
    where: { id },
    data: { name }
  })

  return new User(updatedUser)
}
