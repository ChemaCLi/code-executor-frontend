import { UserRepository } from "../domain/user-repository"
import { User } from "../../../../shared-logic/user/domain/user"

export interface FindUserData {
  id: string
}

export const findUser = async (
  { id }: FindUserData,
  userRepository: UserRepository
) => {
  return await userRepository.findUser({ id }) as User
}
