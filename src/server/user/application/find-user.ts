import { UserRepository } from "../domain/user-repository"

export interface FindUserData {
  id: number
}

export const findUser = async (
  { id }: FindUserData,
  userRepository: UserRepository
) => {
  return userRepository.findUser({ id })
}
