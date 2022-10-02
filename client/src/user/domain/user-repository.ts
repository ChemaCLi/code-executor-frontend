import { User } from "./user"

export type UserRepository = () => ({
  createUser: (args: { name: string, email: string }) => Partial<User>
  updateUser: (args: { id: string, name?: string }) => Partial<User>
  findUser: (args: { id: string }) => User
  searchUsers: (criteria: { name }) => User[]
})
