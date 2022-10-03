import { User } from "../../../shared-logic/user/domain/user"

export type UserRepositoryCreateUser = (args: { name: string, email: string }, ...collaborators: any) => Promise<Partial<User>>
export type UserRepositoryUpdateUser = (args: { id: number, name?: string }, ...collaborators: any) => Promise<Partial<User>>
export type UserRepositoryFindUser = (args: { id: number }, ...collaborators: any) => Promise<User>
export type UserRepositorySearchUsers = (criteria: { name?: string }, ...collaborators: any) => Promise<User[]>
export type UserRepositoryDeleteUser = (criteria: { id: number }, ...collaborators: any) => Promise<User[]>

export type UserRepository = ({
  createUser: UserRepositoryCreateUser
  updateUser: UserRepositoryUpdateUser
  findUser: UserRepositoryFindUser
  searchUsers: UserRepositorySearchUsers
  deleteUser: UserRepositoryDeleteUser
})
