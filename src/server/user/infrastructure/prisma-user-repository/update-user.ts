import { UserRepositoryUpdateUser } from "../../domain/user-repository"
import { User } from "../../../../shared-logic/user/domain/user"

export const updateUser: UserRepositoryUpdateUser = async ({ id,  name }) => {
  const updatedUser: Partial<User> = { id, name }
  return updatedUser
}
