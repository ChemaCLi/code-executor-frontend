import { User } from "../../../../shared-logic/user/domain/user"

export type UserRepositoryCreateUser = (args: { name: string, email: string }) => Promise<Partial<User>>
export type UserRepositoryUpdateUser = (args: { id: string, name?: string }) => Promise<Partial<User>>
export type UserRepositoryFindUser = (args: { id: string }) => Promise<User>
export type UserRepositorySearchUsers = (criteria: { name }) => Promise<User[]>
export type UserRepositoryDeleteUser = (criteria: { id }) => Promise<Partial<User>>

export type UserRepository = ({
  createUser: UserRepositoryCreateUser
  updateUser: UserRepositoryUpdateUser
  findUser: UserRepositoryFindUser
  searchUsers: UserRepositorySearchUsers
  deleteUser: UserRepositoryDeleteUser
})
