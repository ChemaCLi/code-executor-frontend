import { UserRepository } from "../domain/user-repository"
import { User } from "../../../../shared-logic/user/domain/user"

export interface FindUserByIdData {
  id: number
}

export const findUserById = async (
  { id }: FindUserByIdData,
  userRepository: UserRepository
) => {
  return await userRepository.findUser({ id }) as User
}
