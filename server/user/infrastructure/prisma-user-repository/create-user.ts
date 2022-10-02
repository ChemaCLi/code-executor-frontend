import { UserRepositoryCreateUser } from "../../domain/user-repository"

export const createUser: UserRepositoryCreateUser = newUserData => {
  return { id: "", name: newUserData.name, email: newUserData.email }
}
