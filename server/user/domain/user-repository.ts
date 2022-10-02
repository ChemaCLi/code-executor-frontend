import { User } from "./user"

export type UserRepositoryCreateUser = (args: { name: string, email: string }) => Partial<User>
export type UserRepositoryUpdateUser = (args: { id: string, name?: string }) => Partial<User>
export type UserRepositoryFindUser = (args: { id: string }) => User
export type UserRepositorySearchUsers = (criteria: { name }) => User[]

export type UserRepository = () => ({
  createUser: UserRepositoryCreateUser
  updateUser: UserRepositoryUpdateUser
  findUser: UserRepositoryFindUser
  searchUsers: UserRepositorySearchUsers
})
