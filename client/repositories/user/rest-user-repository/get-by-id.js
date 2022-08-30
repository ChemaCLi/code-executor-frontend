import { axiosConnector } from "../../../utils"

export const getById = async ({ id }) => {
  const result = await axiosConnector.get(`/users/${id}`)
  return result.data?.data
}
