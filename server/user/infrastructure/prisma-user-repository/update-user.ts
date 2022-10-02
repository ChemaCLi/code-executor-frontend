import { UserRepositoryUpdateUser } from "../../domain/user-repository"

export const updateUser: UserRepositoryUpdateUser = ({ id,  name }) => {
  return { id, name }
}
