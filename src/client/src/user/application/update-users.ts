import { UserRepository } from "../domain/user-repository"

export interface UpdateUserData {
  id: number,
  name: string
}

export const updateUser = async (
  { id, name }: UpdateUserData,
  userRepository: UserRepository
) => {
  if (!id) throw new Error("the id is required")
  return await userRepository.updateUser({ id, name })
}
