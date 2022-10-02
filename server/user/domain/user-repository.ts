import { User } from "./user"

export type UserRepositoryCreateUser = (args: { name: string, email: string }, ...collaborators: any) => Promise<Partial<User>>
export type UserRepositoryUpdateUser = (args: { id: string, name?: string }, ...collaborators: any) => Promise<Partial<User>>
export type UserRepositoryFindUser = (args: { id: string }, ...collaborators: any) => Promise<User>
export type UserRepositorySearchUsers = (criteria: { name?: string }, ...collaborators: any) => Promise<User[]>

export type UserRepository = ({
  createUser: UserRepositoryCreateUser
  updateUser: UserRepositoryUpdateUser
  findUser: UserRepositoryFindUser
  searchUsers: UserRepositorySearchUsers
})
