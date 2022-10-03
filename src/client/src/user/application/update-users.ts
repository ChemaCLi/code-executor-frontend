import { UserRepository } from "../domain/user-repository"

export interface UpdateUserData {
  id: number,
  name: string
}

export const updateUser = async (
  { id, name }: UpdateUserData,
  userRepository: UserRepository
) => {
  return await userRepository.updateUser({ id, name })
}
