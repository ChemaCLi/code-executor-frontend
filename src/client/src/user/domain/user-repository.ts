import { User } from "../../../../shared-logic/user/domain/user"

export type UserRepositoryCreateUser = (args: { name: string, email: string }) => Promise<Partial<User>>
export type UserRepositoryUpdateUser = (args: { id: number, name?: string }) => Promise<Partial<User>>
export type UserRepositoryFindUser = (args: { id: number }) => Promise<User>
export type UserRepositorySearchUsers = (criteria: { name: string }) => Promise<User[]>
export type UserRepositoryDeleteUser = (criteria: { id: number }) => Promise<Partial<User>>

export type UserRepository = ({
  createUser: UserRepositoryCreateUser
  updateUser: UserRepositoryUpdateUser
  findUser: UserRepositoryFindUser
  searchUsers: UserRepositorySearchUsers
  deleteUser: UserRepositoryDeleteUser
})
