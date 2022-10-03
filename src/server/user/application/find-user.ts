import { UserRepository } from "../domain/user-repository"

export interface FindUserData {
  id: string
}

export const findUser = async (
  { id }: FindUserData,
  userRepository: UserRepository
) => {
  return userRepository.findUser({ id })
}
