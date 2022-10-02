import { User } from "../domain/user"
import { UserRepository } from "../domain/user-repository"
import { propertiesChecker} from "../../shared/utils/properties-checker"

export interface CreateUserData {
  name: string
  email: string
}

export const createUser = (userRepository: UserRepository, userData: CreateUserData) => {
  const userToSave = new User(userData)
  propertiesChecker({ email: true }, userData)
  return userRepository().createUser(userToSave)
}
