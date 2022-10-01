import { axiosConnector } from "../../../utils"

export const getAll = async () => {
  const result = await axiosConnector.get("/users")
  return result.data?.data
}
