import { UserRepositoryUpdateUser } from "../../domain/user-repository"

export const updateUser: UserRepositoryUpdateUser = async ({ id,  name }) => {
  return { id, name }
}
