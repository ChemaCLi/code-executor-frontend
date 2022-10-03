import { User } from "../domain/user"
import {
  UserRepository,
  UserRepositoryFindUser,
  UserRepositoryCreateUser,
  UserRepositoryUpdateUser,
  UserRepositorySearchUsers,
} from "../domain/user-repository"
import { axios } from "../../shared/utils/axios"

export const restUserRepository = (): UserRepository => {
  const createUser: UserRepositoryCreateUser = async ({ name, email }) => {
    const result = await axios.post("/users", { name, email })
    return result.data?.data as User
  }

  const updateUser: UserRepositoryUpdateUser = async ({ name, id }) => {
    const result = await axios.patch(`/users/${id}`, { name })
    return result.data?.data
  }

  const findUser: UserRepositoryFindUser = async ({ id }) => {
    const result = await axios.get(`/users/${id}`)
    return result.data?.data
  }

  const searchUsers: UserRepositorySearchUsers = async ({ name }) => {
    const criteria = "?"
    const filters = [{name}]
    filters.forEach(filter =>
      Object
        .keys(filter)
        .forEach(filterName => criteria + `${filterName}=${filter[filterName]}&`)
    )

    const result = await axios.get(`/users${criteria}`)
    return result.data?.data || []
  }

  return {
    createUser,
    updateUser,
    findUser,
    searchUsers
  }
}
