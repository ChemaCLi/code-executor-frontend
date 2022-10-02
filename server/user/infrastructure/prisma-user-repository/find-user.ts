import { UserRepositoryFindUser } from "../../domain/user-repository"

export const findUser: UserRepositoryFindUser = ({ id: string }) => {
  return { id: "", name: "", email: "" }
}
