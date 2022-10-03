import { User } from "../domain/user"
import { UserRepository } from "../domain/user-repository"

export interface FindUserData {
  id: string
}

export const findUser = async (userRepository: UserRepository, { id }: FindUserData) => {
  return await userRepository.findUser({ id }) as User
}
