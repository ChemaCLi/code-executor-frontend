import { axiosConnector } from "../../../utils"

export const deleteById = async ({ id }) => {
  const result = await axiosConnector.delete(`/users/${id}` )
  return result.data?.data
}
