import { User } from "../../../../shared-logic/user/domain/user"
import { UserRepositoryCreateUser } from "../../domain/user-repository"

export const createUser: UserRepositoryCreateUser = async (newUserData, prisma) => {
  try {
    const newUser = await prisma.user.create({ data: newUserData })
    return new User(newUser)
  } catch (e) {
    console.error(e)
    throw e
  } finally {
    prisma?.$disconnect()
  }
}
