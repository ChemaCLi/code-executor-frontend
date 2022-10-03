import { UserRepository } from "../domain/user-repository"
import { User } from "../../../../shared-logic/user/domain/user"
import { propertiesChecker} from "../../shared/utils/properties-checker"

export interface CreateUserData {
  name: string
  email: string
}

export const createUser = (userData: CreateUserData, userRepository: UserRepository) => {
  const userToSave = new User(userData)
  propertiesChecker({ email: true }, userData)
  return userRepository.createUser(userToSave)
}
