import { axiosConnector } from "../../../../../ui/utils"

export const update = async ({
  id,
  name,
  email
}) => {
  const result = await axiosConnector.patch(`/users/${id}`, { name, email })
  return result.data?.data
}
